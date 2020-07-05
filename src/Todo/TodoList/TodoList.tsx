import React from "react";
import TodoItem from "./TodoItem";
import { onUpdateTodo, onDeleteTodo } from "../../service/services";
import { TodoElement, TodoElements } from "../../domain/entity";

interface TodoListProps {
  todoList: TodoElements;
  setTodoList: (todoList: TodoElements) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todoList, setTodoList }) => {
  const deleteTodo = (id: number) => {
    onDeleteTodo(id);
  };

  const updateTodo = (id: number, content: string, executed: number) => {
    onUpdateTodo(id, content, executed);
    todoList[findIndex(id)] = {
      id: id,
      content: content,
      executed: executed,
    };
    setTodoList([...todoList]);
  };

  const findIndex = (id: number) => {
    return todoList.findIndex((obj: TodoElement) => obj.id === id);
  };

  return (
    <>
      {todoList.map((todo: TodoElement) => (
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
