import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

const GRID = 8;
const SIZE = 30;
// const BORDER_RADIUS = 2;
const keyCodes = {
  enter: 13,
  escape: 27,
  arrowDown: 40,
  arrowUp: 38,
  tab: 9,
};

const getBackgroundColor = ({ isSelected, isGhosting }) => {
  if (isGhosting) return "teal";
  if (isSelected) return "rgba(49,151,149, 0.9)";
  return "white";
};

// palette.bg[isSelected || isGhosting];

const getTextColor = ({ isSelected, isGhosting }) => {
  if (isGhosting) return "white";
  if (isSelected) return "white";
  return "black";
};

// palette.text[isSelected && isGhosting];

// const Container = styled.div`
//   background-color: ${(props) => getBackgroundColor(props)};
//   color: ${(props) => getTextColor(props)};
//   padding: ${GRID}px;
//   margin-bottom: ${GRID}px;
//   border-radius: ${BORDER_RADIUS}px;
//   font-size: 18px;
//   border: 3px solid skyblue;
//   ${(props) => (props.isDragging ? `box-shadow: 2px 2px 1px skyblue;` : "")}
//   ${(props) => (props.isGhosting ? "opacity: 0.8;" : "")}

//     /* needed for SelectionCount */
//     position: 'relative';

//   /* avoid default outline which looks lame with the position: absolute; */
//   &:focus {
//     outline: none;
//     border-color: skyblue;
//   }
// `;

const Container = styled.div`
  outline: none;

  .candidate-card {
    color: ${(props) => getTextColor(props)};
    background: ${(props) => getBackgroundColor(props)};

    p {
      color: inherit;
    }

    &:focus,
    &:active,
    &:hover {
      outline: none;
    }
  }
`;

const SelectionCount = styled.div`
  right: -${GRID}px;
  top: -${GRID}px;
  color: white;
  background: teal;
  border-radius: 50%;
  height: ${SIZE}px;
  width: ${SIZE}px;
  line-height: ${SIZE}px;
  position: absolute;
  text-align: center;
  font-size: 0.8rem;
`;

export default class Task extends Component {
  /**
   * onKeyDown handler for each task.
   * @param {React.KeyboardEvent} event
   * @param {*} provided
   * @param {*} snapshot
   */
  onKeyDown = (event, provided, snapshot) => {
    if (event.defaultPrevented) return;
    if (snapshot.isDragging) return;
    if (event.keyCode !== keyCodes.enter) return;

    event.preventDefault();
    this.performAction(event);
  };

  /**
   * onClick event handler for task.
   *
   * @param {React.MouseEvent} event
   */
  onClick = (event) => {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;

    event.preventDefault();
    this.performAction(event);
  };

  /**
   * Returns a Boolean value indicating whether the
   * `group selection key` is used.
   *
   * @param {React.KeyboardEvent} event
   */
  wasToggleInSelectionGroupKeyUsed = (event) => {
    const isUsingWindows = navigator.platform.indexOf("Win") >= 0;
    return isUsingWindows ? event.ctrlKey : event.metaKey;
  };

  /**
   * Returns a Boolean value indicating whether the
   * `multiple select key` is used.
   *
   * @param {React.KeyboardEvent} event
   */
  wasMultiSelectKeyUsed = (event) => event.shiftKey;

  /**
   * Take appropiate action based on the event.
   *
   * @param {React.MouseEvent | React.KeyboardEvent} event
   */
  performAction = (event) => {
    const {
      task,
      toggleSelection,
      toggleSelectionInGroup,
      multiSelectTo,
    } = this.props;

    if (this.wasToggleInSelectionGroupKeyUsed(event)) {
      toggleSelectionInGroup(task.id);
      return;
    }

    if (this.wasMultiSelectKeyUsed(event)) {
      multiSelectTo(task.id);
      return;
    }

    toggleSelection(task.id);
  };

  render() {
    const { isSelected, isGhosting, task, index, selectionCount } = this.props;

    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={this.onClick}
            onTouchEnd={this.onTouchEnd}
            onKeyDown={(e) => this.onKeyDown(e, provided, snapshot)}
            isDragging={snapshot.isDragging}
            isSelected={isSelected}
            isGhosting={isGhosting}
          >
            {task.content}
            {snapshot.isDragging && selectionCount > 1 ? (
              <SelectionCount>{selectionCount}</SelectionCount>
            ) : null}
          </Container>
        )}
      </Draggable>
    );
  }
}
