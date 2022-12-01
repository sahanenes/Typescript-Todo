import React from "react";

interface ITodoListItem {
  todo: TodoType;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
  return (
    <li>
      <p className="checked">Todo </p>
      <p> Todo </p>
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
