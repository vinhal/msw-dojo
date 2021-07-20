import { baseApi } from "./conf/apis";
import * as authHandler from "./handlers/auth";
import * as todoHandler from "./handlers/todo";

export const handlers = [
  // AUTH
  baseApi.post("/login", authHandler.handleLogin),
  
  // TODOS
  baseApi.get("/todo/:user", todoHandler.handleListTodos),
];
