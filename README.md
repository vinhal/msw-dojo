# Mockando o Front - DOJO

DOC: [Documentação do MSW](https://mswjs.io/docs/getting-started)

## Getting Started

### `Instalar`

    yarn add msw --dev

### `Definir Mocks`

Crie uma pasta `src/mocks`

Crie um arquivo para os handlers `src/mocks/handlers.js`

Exemplo de handler com resolvers:

    import { rest } from 'msw'

    export const handlers = [
        rest.post('/login', (req, res, ctx) => {
            return res(
                ctx.status(200),
            )
        }),

        rest.get('/user', (req, res, ctx) => {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }),
    ]

### `Integração`

Utilize o CLI do msw para criar o service worker e definir seu apontamento no package.json

    npx msw init public/ --save


### `Configurar o Worker`

Crie um arquivo para configurar o worker `src/mocks/browser.js`

Configure-o:

    import { setupWorker } from 'msw'
    import { handlers } from './handlers'

    export const worker = setupWorker(...handlers)

### `Iniciar o Worker`

No entrypoint da aplicação 

    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'

    if (process.env.NODE_ENV === 'development') {
        const { worker } = require('./mocks/browser')
        worker.start()
    }

    ReactDOM.render(<App />, document.getElementById('root'))


### `EXTRA: Configurando e utilizando o Server para testes`

No entrypoint da aplicação 

    import { rest } from 'msw'
    import { setupServer } from 'msw/node'

    const server = setupServer()

    beforeAll(() => {
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => {
        server.close()
    })

    test('renders a book data', () => {
        server.use(
            rest.post('/login', (req, res, ctx) => {
                return res(
                    ctx.status(500),
                    ctx.json({ message: 'Internal Server Error' }),
                )
            }),
        )
        // Test here
    })  



## ----- Request -----

### Path Params

    const { userId } = req.params

### Query Params

    const userId = req.url.searchParams.get('id')


## ----- Response -----
### Headers

    ctx.set('Content-Type', 'application/hal+json')

### Status

    ctx.status(404)

### JSON

    ctx.json({
      firstName: 'John',
      age: 32,
    })
### Delay

    ctx.delay(2000)

### Body (não aplica content-type)

    ctx.body('text-body')


## ----- Composition -----

Definição:

    import { createResponseComposition, context } from 'msw'

    export const delayedResponse = createResponseComposition(null, [
    context.delay('real'),
    ])

Uso: 

    import { rest } from 'msw'
    import { delayedResponse } from './conf/delayed-response'

    export const resolver = (req, res, ctx) => {
        return delayedResponse(
            ctx.json({
                firstName: 'John',
                lastName: 'Maverick',
            }),
        )
    }
