import React from "react";

interface ITodoListItem {
  todo: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}
const TodoListItem: React.FC<ITodoListItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {todo.isDone ? (
        <p className="checked" onClick={() => toggleTodo(todo)}>
          {todo.task}{" "}
        </p>
      ) : (
        <p onClick={() => toggleTodo(todo)}> {todo.task} </p>
      )}
      <span onClick={() => deleteTodo(todo.id)} className="task-icons">
        ✖️
      </span>
    </li>
  );
};

export default TodoListItem;
