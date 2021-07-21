# Mockando o Front - DOJO

## `Objetivo`

Adicionar uma API mock ao projeto, buscando uma estrutura que facilite o seu uso e aplicação em um projeto real

## `Estrutura`

Uma estrutura de mocks que me permita/seja:

- [ ] Fácil alteração e manutenção — `visualmente e estruturalmente`
- [ ] Esteja preparada para uma grande quantidade de mocks
- [ ] Multi-API (estruturada para aceitar várias APIs)
- [ ] Consigo utilizar parte da estrutura nos testes
- [ ] Consiga ativar ou inativar o mock de um endpoint facilmente

## `Mock - Aplicação`

Adicionar uma API Mock ao projeto, mockando os endpoints abaixo e atuando nos testes desses componentes

(*) URL da api está no .env


- [ ] Login
- [ ] List TODOs

Testes de Unidade
- [ ] Login
- [ ] List TODOs


#### :: API List TODOs

    GET - /todo/< user >
    
    200 -> [{ title: "string", description: "string" }]
    204 -> []


#### :: API Login
    POST - /login

    200 -> header { token: 'TOKEN' }
    401 -> { message: 'Credenciais Inválidas' }
    404 -> { message: 'Usuário não cadastrado' }

