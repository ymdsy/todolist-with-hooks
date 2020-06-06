import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  const updateTodoList = (id, content, checked) => {
    const index = todoList.findIndex((obj) => obj.id === id);
    todoList[index].executed = checked;
    console.log("todo", todoList);
    setTodoList([...todoList]);
  };

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          checked={todo.executed}
          content={todo.content !== null ? todo.content : ""}
          updateTodoList={updateTodoList}
        />
      ))}
    </>
  );
};

export default TodoList;
