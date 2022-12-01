import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
