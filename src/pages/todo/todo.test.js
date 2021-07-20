import { render, screen } from "@testing-library/react";
import { simpleTask } from "mocks/handlers/data/todo";
import { baseApi } from "mocks/conf/apis";
import { serverMock, resp } from "../../setupTests";
import Todo from ".";

test("should show todo list", async () => {
  serverMock.use(baseApi.get("/todo/:user", () => resp(200, [simpleTask])));

  render(<Todo userEmail="joao" />);

  expect(await screen.findByText(simpleTask.title)).toBeVisible();
  expect(await screen.findByText(simpleTask.description)).toBeVisible();
});
