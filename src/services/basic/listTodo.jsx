import { makeRequest } from "../makerequest";
export async function listTodo(data) {
  return makeRequest("/posts", { method: "GET", data });
}

export async function listTodoById(data) {
const {id} = data;
return makeRequest(`posts/${id}`, { method: "GET", data });
}
export async function listTodoDelete(data) {
  const {id} = data;
  return makeRequest(`/posts/${id}`, { method: "DELETE", data });
}
export async function postSave(data) {
  return makeRequest("/posts", { method: "POST", data });
}