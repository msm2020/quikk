const isProduction = process.env.NODE_ENV === "production";
const prefix = "Invariant failed";

/**
 * Function to handle error messages.
 *
 * @param {any} condition
 * @param {string} message
 *
 * @see {@link https://git.io/JLKmZ}
 */
function invariant(condition, message = prefix) {
  if (condition) return;

  class RbdInvariant extends Error {
    constructor(message) {
      super(message);
      this.message = message;
    }

    toString() {
      return this.message;
    }
  }

  if (isProduction) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(`${prefix}: ${message || ""}`);
  }
}

/**
 * A function to help with reordering.
 *
 * @param {any[]} list List to be reordered.
 * @param {number} startIndex First index of the list.
 * @param {number} endIndex Last index of the list.
 *
 * @see {@link https://git.io/JLKIQ}
 */
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const withNewTaskIds = (column, taskIds) => ({
  id: column.id,
  title: column.title,
  taskIds,
});

/**
 * Get the home column of currently dragged card.
 *
 * @param {any} entities
 * @param {number} taskId
 *
 * @see{@link https://git.io/JLKmo}
 */
const getHomeColumn = (entities, taskId) => {
  const columnId = entities.columnOrder.find((id) => {
    const column = entities.columns[id];
    return column.taskIds.includes(taskId);
  });

  invariant(columnId, "Could not find column for task.");

  return entities.columns[columnId];
};

/**
 * Function to redorder a single card.
 *
 * @param {any} props
 *
 * @see {@link https://git.io/JLKLw}
 */
const reorderSingleDrag = ({
  entities,
  selectedTaskIds,
  source,
  destination,
}) => {
  if (source.droppableId === destination.droppableId) {
    const column = entities.columns[source.droppableId];
    const reordered = reorder(column.taskIds, source.index, destination.index);
    const updated = {
      ...entities,
      columns: {
        ...entities.columns,
        [column.id]: withNewTaskIds(column, reordered),
      },
    };

    return {
      entities: updated,
      selectedTaskIds,
    };
  }

  // moving to a new list
  const home = entities.columns[source.droppableId];
  const foreign = entities.columns[destination.droppableId];

  // the id of the task to be moved
  const taskId = home.taskIds[source.index];

  // remove from home column
  const newHomeTaskIds = [...home.taskIds];
  newHomeTaskIds.splice(source.index, 1);

  // add to foreign column
  const newForeignTaskIds = [...foreign.taskIds];
  newForeignTaskIds.splice(destination.index, 0, taskId);

  const updated = {
    ...entities,
    columns: {
      ...entities.columns,
      [home.id]: withNewTaskIds(home, newHomeTaskIds),
      [foreign.id]: withNewTaskIds(foreign, newForeignTaskIds),
    },
  };

  return {
    entities: updated,
    selectedTaskIds,
  };
};
/**
 * Function to redorder a multiple cards.
 *
 * @param {any} props
 *
 * @see {@link https://git.io/JLKtm}
 */
const reorderMultiDrag = ({
  entities,
  selectedTaskIds,
  source,
  destination,
}) => {
  const start = entities.columns[source.droppableId];
  const dragged = start.taskIds[source.index];

  const insertAtIndex = (() => {
    const destinationIndexOffset = selectedTaskIds.reduce(
      (previous, current) => {
        if (current === dragged) {
          return previous;
        }

        const final = entities.columns[destination.droppableId];
        const column = getHomeColumn(entities, current);

        if (column !== final) {
          return previous;
        }

        const index = column.taskIds.indexOf(current);

        if (index >= destination.index) {
          return previous;
        }

        return previous + 1;
      },
      0
    );

    const result = destination.index - destinationIndexOffset;
    return result;
  })();

  const orderedSelectedTaskIds = [...selectedTaskIds];
  orderedSelectedTaskIds.sort((a, b) => {
    if (a === dragged) {
      return -1;
    }

    if (b === dragged) {
      return 1;
    }

    const columnForA = getHomeColumn(entities, a);
    const indexOfA = columnForA.taskIds.indexOf(a);
    const columnForB = getHomeColumn(entities, b);
    const indexOfB = columnForB.taskIds.indexOf(b);

    if (indexOfA !== indexOfB) {
      return indexOfA - indexOfB;
    }

    return -1;
  });

  const withRemovedTasks = entities.columnOrder.reduce((previous, columnId) => {
    const column = entities.columns[columnId];

    const remainingTaskIds = column.taskIds.filter(
      (id) => !selectedTaskIds.includes(id)
    );

    previous[column.id] = withNewTaskIds(column, remainingTaskIds);
    return previous;
  }, entities.columns);

  const final = withRemovedTasks[destination.droppableId];
  const withInserted = (() => {
    const base = [...final.taskIds];
    base.splice(insertAtIndex, 0, ...orderedSelectedTaskIds);
    return base;
  })();

  const withAddedTasks = {
    ...withRemovedTasks,
    [final.id]: withNewTaskIds(final, withInserted),
  };

  const updated = {
    ...entities,
    columns: withAddedTasks,
  };

  return {
    entities: updated,
    selectedTaskIds: orderedSelectedTaskIds,
  };
};

export const multiDragAwareReorder = (args) => {
  if (args.selectedTaskIds.length > 1) {
    return reorderMultiDrag(args);
  }
  return reorderSingleDrag(args);
};

export const multiSelect = (entities, selectedTaskIds, newTaskId) => {
  if (!selectedTaskIds.length) {
    return [newTaskId];
  }

  const columnOfNew = getHomeColumn(entities, newTaskId);
  const indexOfNew = columnOfNew.taskIds.indexOf(newTaskId);

  const lastSelected = selectedTaskIds[selectedTaskIds.length - 1];
  const columnOfLast = getHomeColumn(entities, lastSelected);
  const indexOfLast = columnOfLast.taskIds.indexOf(lastSelected);

  // multi selecting to another column
  // select everything up to the index of the current item
  if (columnOfNew !== columnOfLast) {
    return columnOfNew.taskIds.slice(0, indexOfNew + 1);
  }

  // multi selecting in the same column
  // need to select everything between the last index and the current index inclusive

  // nothing to do here
  if (indexOfNew === indexOfLast) {
    return null;
  }

  const isSelectingForwards = indexOfNew > indexOfLast;
  const start = isSelectingForwards ? indexOfLast : indexOfNew;
  const end = isSelectingForwards ? indexOfNew : indexOfLast;

  const inBetween = columnOfNew.taskIds.slice(start, end + 1);

  // everything inbetween needs to have it's selection toggled.
  // with the exception of the start and end values which will always be selected

  const toAdd = inBetween.filter((taskId) => {
    // if already selected: then no need to select it again
    if (selectedTaskIds.includes(taskId)) {
      return false;
    }
    return true;
  });

  const sorted = isSelectingForwards ? toAdd : [...toAdd].reverse();
  const combined = [...selectedTaskIds, ...sorted];

  return combined;
};
