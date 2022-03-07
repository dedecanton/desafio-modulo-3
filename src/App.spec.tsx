import * as React from 'react';
import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


describe("Test App Function", () => {

  // test("added task should be in listArea", () => {
  //   render(<App />)
  
  //   const input = screen.getByPlaceholderText("Descrição da tarefa...");
  //   const addButton = screen.getByText("Adicionar");
  
  //   userEvent.type(input, "teste");
  //   userEvent.click(addButton);
  
  //   expect(screen.getByText('teste')).toBeVisible();
  // });
  
  test("button 'Remover da lista' is visible and when clicked should remove task", () => {
    render(<App />)
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const addButton = screen.getByText("Adicionar");

    userEvent.type(input, "teste");
    userEvent.click(addButton);

    const removeButton = screen.getByText("Remover da lista");
    userEvent.click(removeButton);

    expect(screen.queryByText("teste")).not.toBeInTheDocument();
  });

  test("on checkbox click should be toggle te done state and style", () => {
    render(<App />)
    // add task
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const addButton = screen.getByText("Adicionar");

    userEvent.type(input, "teste");
    userEvent.click(addButton);
    expect(screen.getByText("teste")).toBeVisible();

    // check
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const label = screen.getByText("teste");
    expect(label).toHaveClass("checked");

    // uncheck
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(label).not.toHaveClass("checked");
  });
});
