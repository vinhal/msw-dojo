import { defaultResponse } from "./data/todo";

export const handleListTodos = (req, res, ctx) => {
  const { user } = req.params;

  if (user === "zezim") {
    return res(ctx.status(200), ctx.json(defaultResponse));
  }

  if (user === "vinhal") {
    return res(ctx.status(200), ctx.json(defaultResponse));
  }

  return res(ctx.status(200), ctx.json(defaultResponse));
};
