import React, { useState } from "react";
import { onCreateTodo } from "../service/services";

const TodoCreator = () => {
  const [content, setContent] = useState("");

  /**
   * 引数のnewContentをstateに反映する。
   *
   * @param newContent 新規TODOの内容。
   */
  const onChangeContent = (newContent: string) => {
    setContent(newContent);
  };

  /**
   *
   * コンテンツを作成し、TODOリストを登録する。
   *
   * @param {コンテンツ} content
   */
  const createContent = () => {
    // e.preventDefault();
    onCreateTodo(content);
    // formの初期化
    setContent("");
  };

  return (
    <div>
      <form>
        新しいTODO：
        <input
          type="text"
          value={content}
          onChange={(e) => onChangeContent(e.target.value)}
        />
        <button onClick={(e) => createContent()}>作成する</button>
      </form>
    </div>
  );
};

export default TodoCreator;
