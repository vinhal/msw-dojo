import { render, screen } from "@testing-library/react";
import Todo from ".";

test("should show todo list", async () => {

  render(<Todo userEmail="joao" />);

  expect(await screen.findByText('...title')).toBeVisible();
  expect(await screen.findByText('...description')).toBeVisible();
});
