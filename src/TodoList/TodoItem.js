import React, { useState } from "react";
import { onChangeCheck } from "../service/services";

const TodoItem = ({ id, content, checked, updateTodoList }) => {
  return (
    <div>
      <form>
        {id}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChangeCheck(id, content, checked);
            updateTodoList(id, content, checked === 1 ? 0 : 1);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => {
            /* props.onChangeContent(props.id, e.target.value, props.checked) */
          }}
        />
        <button
          onClick={() => {
            /* props.onDeleteContent(props.id) */
          }}
        >
          削除する
        </button>
      </form>
    </div>
  );
};

export default TodoItem;
