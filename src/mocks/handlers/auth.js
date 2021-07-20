export const handleLogin = (req, res, ctx) => {
  const { email } = req.body;

  // if (email === 'pass') return

  if (email === "joao")
    return res(
      ctx.status(401),
      ctx.json({
        message: "Erro na autenticação do usuário",
      })
    );

  if (email === "zezim")
    return res(
      ctx.status(404),
      ctx.json({
        message: "Usuário não encontrado",
      })
    );

  return res(
    ctx.status(200),
    ctx.json({
      userId: 389,
    })
  );
};
