import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  const updateTodoList = (id, content, executed) => {
    const index = todoList.findIndex((obj) => obj.id === id);
    todoList[index].id = id;
    todoList[index].content = content;
    todoList[index].executed = executed;
    console.log("todo", todoList);
    setTodoList([...todoList]);
  };

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          executed={todo.executed}
          content={todo.content !== null ? todo.content : ""}
          updateTodoList={updateTodoList}
        />
      ))}
    </>
  );
};

export default TodoList;
