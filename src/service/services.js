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

export const onChangeCheck = (id, content, checked) => {
  changeTodo(id, content, checked === 1 ? 0 : 1);
};
/**
 * TODOリストの更新要求を送信する。
 *
 * @param {id} id
 * @param {コンテンツ} content
 * @param {チェックフラグ} checked
 */
export const changeTodo = async (id, content, checked) => {
  // if (!this.isValid(id, checked)) {
  //   return;
  // }

  const formData = new FormData();
  formData.append("id", id);
  formData.append("content", content);
  formData.append("executed", checked);
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
