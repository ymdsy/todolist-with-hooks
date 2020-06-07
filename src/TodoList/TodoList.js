import React from "react";
import TodoItem from "./TodoItem";
import { onUpdateTodo, onDeleteTodo } from "../service/services";

const TodoList = ({ todoList, setTodoList }) => {
  const deleteTodo = (id) => {
    onDeleteTodo(id);
  };

  const updateTodo = (id, content, executed) => {
    onUpdateTodo(id, content, executed);
    todoList[findIndex(id)] = {
      id: id,
      content: content,
      executed: executed,
    };
    setTodoList([...todoList]);
  };

  const findIndex = (id) => {
    return todoList.findIndex((obj) => obj.id === id);
  };

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content !== null ? todo.content : ""}
          executed={todo.executed}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
