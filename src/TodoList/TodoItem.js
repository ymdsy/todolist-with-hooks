import React, { useState } from "react";
import { onChangeCheck } from "../service/services";

const TodoItem = ({ id, content, executed, updateTodoList }) => {
  return (
    <div>
      <form>
        {id}
        <input
          type="checkbox"
          executed={executed}
          onChange={() => {
            onChangeCheck(id, content, executed);
            updateTodoList(id, content, executed === 1 ? 0 : 1);
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
