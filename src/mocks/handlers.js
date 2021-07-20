import { baseApi } from "./conf/apis";
import { handleLogin } from "./handlers/auth";
import { handleListTodos } from "./handlers/todo";

export const handlers = [
  baseApi.post("/login", handleLogin, false),
  baseApi.post("/todo/:userId", handleListTodos),
];
