import React from "react";

const TodoItem = ({ id, content, executed, updateTodo, deleteTodo }) => {
  return (
    <div>
      <form>
        {id}
        <input
          type="checkbox"
          checked={executed}
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
