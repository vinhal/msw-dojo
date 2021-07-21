import { rest } from "msw";
import { payloadLogin, payloadTodo } from "./payloads"

const baseApi = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${baseApi}/login`, (request, response, context) =>
    response(context.status(200), context.json(payloadLogin))
  ),
  rest.get(`${baseApi}/todo/:loggedUser`, (request, response, context) =>
    response(
      context.status(200),
      context.json(payloadTodo)
    )
  ),
];