import React from "react";

interface TodoItemProps {
  id: number;
  content: string;
  executed: boolean;
  updateTodo: (id: number, content: string, executed: boolean) => void;
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
          checked={executed}
          onChange={() => {
            updateTodo(id, content, !executed);
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
