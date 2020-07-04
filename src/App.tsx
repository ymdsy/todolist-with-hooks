import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import TodoCreator from "./TodoCreator/TodoCreator";
import { fetchAllTodo, fetchIp } from "./service/services";
import { TodoElements } from "./domain/entity";

const App = () => {
  const [todoList, setTodoList] = useState<TodoElements>([]);
  const [todoNum, setTodoNum] = useState(0);
  const [executedTodoNum, setExecutedTodoNum] = useState(0);
  const [ipAddress, setipAddress] = useState("");
  const [isOpenAddress, setIsOpenAddress] = useState(false);

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

  const handleClick = () => {
    setIsOpenAddress(true);
    if (ipAddress !== "") {
      return;
    }
    fetchIp().then((ipAddress) => {
      setipAddress(ipAddress);
    });
  };

  const handleRemoveAddressClick = () => {
    setIsOpenAddress(false);
  };

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

      {!isOpenAddress ? (
        <button onClick={handleClick}>IPアドレス表示</button>
      ) : (
        <>
          <button onClick={handleRemoveAddressClick}>アドレス非表示</button>
          <div>IPアドレス：{ipAddress}</div>
        </>
      )}
    </>
  );
};

export default App;
