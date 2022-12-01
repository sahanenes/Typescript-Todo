import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6351820f3e9fa1244e6084e3.mockapi.io/api/todos";

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
