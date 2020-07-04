import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreator from "./TodoCreator/TodoCreator";
import { fetchAllTodo } from "./service/services";
import { TodoElements } from "./domain/entity";

const App = () => {
  const [todoList, setTodoList] = useState<TodoElements>([]);
  const [todoNum, setTodoNum] = useState(0);
  const [executedTodoNum, setExecutedTodoNum] = useState(0);

  const setFunc = (todoList: TodoElements) => {
    setTodoList(todoList);
  };

  useEffect(() => {
    fetchAllTodo().then(setFunc);
  }, []);

  useEffect(() => {
    setTodoNum(todoList.length);
    setExecutedTodoNum(
      todoList.filter((todo) => {
        return todo.executed === 1;
      }).length
    );
  }, [todoList]);

  return (
    <>
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <>Loding List...</>
      )}
      <TodoCreator />
      <div>todoの数：{todoNum}</div>
      <div>実行済みのtodoの数：{executedTodoNum}</div>
    </>
  );
};

export default App;
