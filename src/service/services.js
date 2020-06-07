const url = "http://localhost:8888/todo";

/**
 * TODOリストをサーバから取得する。
 */
export const fetchAllTodo = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Fail to receive responce.");
    return;
  }
  const json = await response.json();
  return json;
};

/**
 * 引数から受け取ったIDのTODOを削除する。
 *
 * @param {id} id
 */
export const onDeleteTodo = (id) => {
  deleteTodo(id);
};

/**
 * TODOリストの更新要求を送信する。
 *
 * @param {id} id
 * @param {コンテンツ} content
 * @param {チェックフラグ} executed
 */
export const onUpdateTodo = async (id, content, executed) => {
  if (!isValid(id, executed)) {
    return;
  }

  const formData = new FormData();
  formData.append("id", id);
  formData.append("content", content);
  formData.append("executed", executed);
  const formDataEncoded = new URLSearchParams(formData);

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

/**
 * TODOリストの削除要求を送信する。
 *
 * @param {削除したいTODOのid}} id
 */
const deleteTodo = async (id) => {
  if (!isValid(id, 0)) {
    return;
  }

  const formData = new FormData();
  formData.append("id", id);
  const formDataEncoded = new URLSearchParams(formData);

  const response = await fetch(url, {
    method: "DELETE",
    body: formDataEncoded,
  });

  if (!response.ok) {
    console.log("Fail to receive responce.", response);
    return {};
  }
  const json = await response.json();
  return json;
};

/**
 * 正しい値であることを確認する。
 * @param {id} id
 * @param {チェックフラグ} checked
 */
const isValid = (id, checked) => {
  if (!Number.isInteger(id)) {
    console.log("Illeagal id was expected.");
    return false;
  }

  if (checked !== 0 && checked !== 1) {
    console.log("Illeagal checked was expected. checked=[" + checked + "]");
    return false;
  }

  return true;
};
