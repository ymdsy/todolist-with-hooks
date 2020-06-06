/**
 * TODOリストをサーバから取得する。
 */
export const fetchAllTodo = async () => {
  const url = "http://localhost:8888/todo";
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Fail to receive responce.");
    return;
  }
  const json = await response.json();
  return json;
};

export const onChangeCheck = (id, content, executed) => {
  changeTodo(id, content, executed === 1 ? 0 : 1);
};
/**
 * TODOリストの更新要求を送信する。
 *
 * @param {id} id
 * @param {コンテンツ} content
 * @param {チェックフラグ} executed
 */
export const changeTodo = async (id, content, executed) => {
  // if (!this.isValid(id, executed)) {
  //   return;
  // }

  const formData = new FormData();
  formData.append("id", id);
  formData.append("content", content);
  formData.append("executed", executed);
  const formDataEncoded = new URLSearchParams(formData);

  const url = "http://localhost:8888/todo";
  const response = await fetch(url, {
    method: "PUT",
    body: formDataEncoded,
  });
  if (!response.ok) {
    console.log("Fail to receive responce.", response);
    return {};
  }

  const json = await response.json();
  return json;
};
