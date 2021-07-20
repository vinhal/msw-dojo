import { defaultResponse, unauthorizedResponse, userNotFoundResponse } from "./data/auth";

export const handleLogin = (req, res, ctx) => {
  const { email } = req.body;

  // if (email === 'pass') return

  if (email === "joao")
    return res(
      ctx.status(401),
      ctx.json(unauthorizedResponse)
    );

  if (email === "zezim")
    return res(
      ctx.status(404),
      ctx.json(userNotFoundResponse)
    );

  return res(
    ctx.status(200),
    ctx.json(defaultResponse)
  );
};
