import React from "react";

interface ITodoListItem {
  todo: TodoType;
  toggleTodo: ToggleFn;
}
const TodoListItem: React.FC<ITodoListItem> = ({ todo, toggleTodo }) => {
  return (
    <li>
      {todo.isDone ? (
        <p className="checked" onClick={() => toggleTodo(todo)}>
          {todo.task}{" "}
        </p>
      ) : (
        <p onClick={() => toggleTodo(todo)}> {todo.task} </p>
      )}
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
