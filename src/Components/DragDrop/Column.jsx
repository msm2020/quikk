import React, { Component, Suspense, lazy } from "react";
import { Droppable } from "react-beautiful-dnd";
import memoizeOne from "memoize-one";
import styled from "@emotion/styled";
// import Task from "./Task";

const Task = lazy(() => import("./Task"));

const getSelectedMap = memoizeOne((selectedTaskIds) =>
  selectedTaskIds.reduce((previous, current) => {
    previous[current] = true;
    return previous;
  }, {})
);

export default class Column extends Component {
  render() {
    const {
      column,
      tasks,
      selectedTaskIds,
      draggingTaskId,
      toggleSelection,
      toggleSelectionInGroup,
      multiSelectTo,
    } = this.props;

    return (
      <Suspense fallback={<p>Loading...</p>}>
        <ColumnContainer>
          <ColumnTitleFlex>
            <span
              style={{
                backgroundColor: column.color,
                height: "12px",
                width: "12px",
                borderRadius: "0.25em",
              }}
            />
            <ColumnTitle>{column.title}</ColumnTitle>
          </ColumnTitleFlex>
          <Droppable droppableId={column.id}>
            {(provided) => {
              const { innerRef, droppableProps } = provided;

              return (
                <TasksList ref={innerRef} {...droppableProps}>
                  {tasks.map((task, i) => {
                    const isSelected = Boolean(
                      getSelectedMap(selectedTaskIds)[task.id]
                    );

                    const isGhosting =
                      isSelected &&
                      Boolean(draggingTaskId) &&
                      draggingTaskId !== task.id;

                    return (
                      <Task
                        key={task.id}
                        task={task}
                        index={i}
                        isSelected={isSelected}
                        isGhosting={isGhosting}
                        selectionCount={selectedTaskIds.length}
                        toggleSelection={toggleSelection}
                        toggleSelectionInGroup={toggleSelectionInGroup}
                        multiSelectTo={multiSelectTo}
                      />
                    );
                  })}
                  {provided.placeholder}
                </TasksList>
              );
            }}
          </Droppable>
        </ColumnContainer>
      </Suspense>
    );
  }
}

const ColumnContainer = styled.div`
  width: 600px;
  margin: 8px;
  border-radius: 2px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ColumnTitleFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const ColumnTitle = styled.h3`
  margin-left: 5px;
`;

const TasksList = styled.div`
  padding: 8px;
  width: 450px;
  min-height: 100px;
`;
// flex-grow: 1;
