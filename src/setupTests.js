import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import resp from "./mocks/conf/resp";

const server = setupServer();

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export { server as serverMock, resp };
