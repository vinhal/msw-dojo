import resp from "../conf/resp";
import { defaultResponse } from "./data/todo";

export const handleListTodos = (req) => {
  const { user } = req.params;

  if (user === "zezim") {
    return resp(200, defaultResponse);
  }

  if (user === "lucas") {
    return resp(200, defaultResponse);
  }
  
  return resp(200, defaultResponse);
};
