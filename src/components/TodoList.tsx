import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: TodoType[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
