import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import { fetchAllTodo } from "./service/services";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => fetchAllTodo().then((todoList) => setTodoList(todoList)), []);

  console.log(todoList);
  return (
    <>
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <>Loding List...</>
      )}
    </>
  );
};

export default App;