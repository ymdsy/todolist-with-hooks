import React from "react";

interface TodoItemProps {
  id: number;
  content: string;
  executed: number;
  updateTodo: (id: number, content: string, executed: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.SFC<TodoItemProps> = ({
  id,
  content,
  executed,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div>
      <form>
        {id}
        <input
          type="checkbox"
          checked={executed === 1 ? true : false}
          onChange={() => {
            updateTodo(id, content, executed === 1 ? 0 : 1);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => {
            updateTodo(id, e.target.value, executed);
          }}
        />
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          削除する
        </button>
      </form>
    </div>
  );
};

export default TodoItem;
