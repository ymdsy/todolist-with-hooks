import { isBoolean } from "util";
import { TodoElements } from "../domain/entity";

const url = "http://localhost:8888/todo";

/**
 * TODOリストをサーバから取得する。
 */
export const fetchAllTodo = async (): Promise<TodoElements> => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Fail to receive responce.");
    return [];
  }
  const json = await response.json();
  return json;
};

/**
 * TODOリストの登録要求を送信する。
 *
 * @param {コンテンツ} content
 */
export const onCreateTodo = async (content: string) => {
  const formData = new URLSearchParams();
  formData.append("content", content);
  const formDataEncoded = new URLSearchParams(formData);

  const response = await fetch(url, {
    method: "POST",
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
 * 引数から受け取ったIDのTODOを削除する。
 *
 * @param {id} id
 */
export const onDeleteTodo = (id: number) => {
  deleteTodo(id);
};

/**
 * TODOリストの更新要求を送信する。
 *
 * @param {id} id
 * @param {コンテンツ} content
 * @param {チェックフラグ} executed
 */
export const onUpdateTodo = async (
  id: number,
  content: string,
  executed: number
) => {
  if (!isValid(id, executed)) {
    return;
  }

  const formData = new URLSearchParams();
  formData.append("id", id.toString());
  formData.append("content", content);
  formData.append("executed", executed ? "1" : "0");
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
 * @param {削除したいTODOのid} id
 */
const deleteTodo = async (id: number) => {
  if (!isValid(id, 0)) {
    return;
  }

  const formData = new URLSearchParams();
  formData.append("id", id.toString());
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
 * @param {チェックフラグ} executed
 */
const isValid = (id: number, executed: number) => {
  if (!Number.isInteger(id)) {
    console.log("Illeagal id was expected.");
    return false;
  }

  if (!Number.isInteger(executed)) {
    console.log("Illeagal executed was expected. executed=[" + executed + "]");
    return false;
  }

  return true;
};

/**
 * ipアドレス取得する。
 */
export const fetchIp = async (): Promise<string> => {
  const response = await fetch("https://ifconfig.me/ip");
  const text = await response.text();
  console.log("fetch ip address", text);
  return text;
};
