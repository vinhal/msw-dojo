import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Auth from ".";

test("should login with success", () => {
  const onLogin = jest.fn();

  render(<Auth onLogin={onLogin} />);

  const loginInput = screen.getByPlaceholderText("Login");
  const passwordInput = screen.getByPlaceholderText("Senha");
  const submit = screen.getByDisplayValue("Entrar");

  userEvent.type(loginInput, "zezim");
  userEvent.type(passwordInput, "1234");
  userEvent.click(submit);

  return waitFor(() => expect(onLogin).toHaveBeenCalled());
});

test("should unauthorize login", async () => {
  render(<Auth onLogin={jest.fn()} />);

  const loginInput = screen.getByPlaceholderText("Login");
  const passwordInput = screen.getByPlaceholderText("Senha");
  const submit = screen.getByDisplayValue("Entrar");

  userEvent.type(loginInput, "tiao");
  userEvent.type(passwordInput, "234");
  userEvent.click(submit);

  expect(await screen.findByText('....error message')).toBeVisible();
});
