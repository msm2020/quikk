import React, { Component, Suspense, lazy } from "react";
// We need the imports for intellisense.
// eslint-disable-next-line
import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { multiDragAwareReorder, multiSelect } from "./utils";
import { initialData } from "./initial-data";
// import Column from "./Column";

const Column = lazy(() => import("./Column"));

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow-x: scroll;
  padding: 1em;
  height: 78vh;
  margin-top: 20px;
`;

/**
 * The Drag and Drop. 🎉
 * @class DragDrop
 * @extends React.Component
 * @public
 */
export default class DragDrop extends Component {
  state = {
    entities: initialData,
    selectedTaskIds: [],
    draggingTaskId: null,
  };

  componentDidMount() {
    window.addEventListener("click", this.onWindowClick);
    window.addEventListener("keydown", this.onWindowKeyDown);
    window.addEventListener("touchend", this.onWindowTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
    window.removeEventListener("keydown", this.onWindowKeyDown);
    window.removeEventListener("touchend", this.onWindowTouchEnd);
  }

  onWindowKeyDown = (e) => {
    if (e.defaultPrevented) {
      return;
    }

    if (e.key === "Escape") {
      this.unSelectAll();
    }
  };

  onWindowClick = (e) => {
    if (e.defaultPrevented) {
      return;
    }

    this.unSelectAll();
  };

  onWindowTouchEnd = (e) => {
    if (e.defaultPrevented) {
      return;
    }

    this.unSelectAll();
  };

  /**
   * 🔥 when a card has been dragged.
   * We use this function to set the currently dragging card.
   *
   * @param {DragStart} start
   */
  onDragStart = (start) => {
    const id = start.draggableId;
    const selected = this.state.selectedTaskIds.find((taskId) => taskId === id);

    if (!selected) {
      this.unSelectAll();
    }

    this.setState({
      draggingTaskId: start.draggableId,
    });
  };

  /**
   * This is responsible for reordering cards
   * regardless of in which column they are dropped in.
   *
   * It is smart enough to detect whether only single or multiple
   * cards are dragged.
   *
   * @param {DropResult} result
   */
  onDragEnd = (result) => {
    const { destination, source, reason } = result;

    // Do nothing when, a card is not dropped in a foreign column
    // or the action was cancelled for example by ESC.
    if (!destination || reason === "CANCEL") {
      return this.setState({ draggingTaskId: null });
    }

    const { entities, selectedTaskIds } = this.state;

    const processed = multiDragAwareReorder({
      entities,
      selectedTaskIds,
      source,
      destination,
    });

    this.setState({
      ...processed,
      selectedTaskIds: [],
      draggingTaskId: null,
    });
  };

  /**
   * Toggle single selected card state.
   *
   * @param {number} taskId
   */
  toggleSelection = (taskId) => {
    const { selectedTaskIds } = this.state;
    const wasSelected = selectedTaskIds.includes(taskId);

    const newTaskIds = (() => {
      if (!wasSelected) return [taskId];
      if (selectedTaskIds.length > 1) return [taskId];
      return [];
    })();

    this.setState({ selectedTaskIds: newTaskIds });
  };

  /**
   * Toggle multiple card selection state.
   *
   * @param {number} taskId
   */
  toggleSelectionInGroup = (taskId) => {
    const { selectedTaskIds } = this.state;
    const index = selectedTaskIds.indexOf(taskId);

    if (index === -1) {
      this.setState({
        selectedTaskIds: [...selectedTaskIds, taskId],
      });

      return;
    }

    const shallow = [...selectedTaskIds];
    shallow.splice(index, 1);

    this.setState({ selectedTaskIds: shallow });
  };

  /**
   * Multi logic for cards.
   *
   * @param {number} newTaskId
   */
  multiSelectTo = (newTaskId) => {
    const { entities, selectedTaskIds } = this.state;
    const updated = multiSelect(entities, selectedTaskIds, newTaskId);

    if (updated === null) return;

    this.setState({
      selectedTaskIds: updated,
    });
  };

  /**
   * Unselect all the cards.
   */
  unSelectAll = () =>
    this.setState({
      selectedTaskIds: [],
    });

  render() {
    const { entities, selectedTaskIds, draggingTaskId } = this.state;
    const { toggleSelection, toggleSelectionInGroup, multiSelectTo } = this;

    if (process.env.NODE_ENV === "development") {
      console.log(this.state);
    }

    return (
      <Suspense fallback={<p>Loading...</p>}>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Container>
            {entities.columnOrder.map((columnId) => {
              const column = entities.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => entities.tasks[taskId]
              );

              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  selectedTaskIds={selectedTaskIds}
                  draggingTaskId={draggingTaskId}
                  toggleSelection={toggleSelection}
                  toggleSelectionInGroup={toggleSelectionInGroup}
                  multiSelectTo={multiSelectTo}
                />
              );
            })}
          </Container>
        </DragDropContext>
      </Suspense>
    );
  }
}
