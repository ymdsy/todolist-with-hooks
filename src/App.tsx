import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreator from "./TodoCreator/TodoCreator";
import { fetchAllTodo } from "./service/services";
import { TodoElements } from "./domain/entity";

const App = () => {
  const [todoList, setTodoList] = useState<TodoElements>([]);

  const setFunc = (todoList: TodoElements) => {
    setTodoList(todoList);
  };

  useEffect(() => {
    fetchAllTodo().then(setFunc);
  }, []);

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
