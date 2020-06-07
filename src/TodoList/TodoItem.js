import React from "react";
import {
  onChangeCheck,
  onChangeContent,
  onDeleteContent,
} from "../service/services";

const TodoItem = ({ id, content, executed, updateTodoList }) => {
  return (
    <div>
      <form>
        {id}
        <input
          type="checkbox"
          checked={executed}
          onChange={() => {
            onChangeCheck(id, content, executed);
            updateTodoList(id, content, executed === 1 ? 0 : 1);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => {
            onChangeContent(id, e.target.value, executed);
            updateTodoList(id, e.target.value, executed);
          }}
        />
        <button
          onClick={() => {
            onDeleteContent(id);
          }}
        >
          削除する
        </button>
      </form>
    </div>
  );
};

export default TodoItem;
