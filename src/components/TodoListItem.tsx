import React from "react";

interface ITodoListItem {
  todo: TodoType;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
  return (
    <li>
      {todo.isDone ? (
        <p className="checked">{todo.task} </p>
      ) : (
        <p> {todo.task} </p>
      )}
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
