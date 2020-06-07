import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList.tsx";
import TodoCreator from "./TodoCreator/TodoCreator.tsx";
import { fetchAllTodo } from "./service/services";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => fetchAllTodo().then((todoList) => setTodoList(todoList)), []);

  return (
    <>
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <>Loding List...</>
      )}
      <TodoCreator />
    </>
  );
};

export default App;
