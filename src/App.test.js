import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

import { AppProvider } from "./context";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("search input should be empty on init", () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  const userInput = screen.getByPlaceholderText(/search books/i);
  expect(userInput.value).toBe("");
});

test("search input should be present", () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveFocus();
});

test("click search button to list search results", async () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  const testValue = "hobbit";
  const inputEl = screen.getByRole("textbox");
  const searchBtn = screen.getByRole("button");
  fireEvent.change(inputEl, { target: { value: testValue } });
  fireEvent.click(searchBtn);
  const result = await screen.findByRole("list");
  expect(result).toBeInTheDocument();
});

//

test("click heart to add to library", async () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  const testValue = "hobbit";
  const inputEl = screen.getByRole("textbox");
  const searchBtn = screen.getByRole("button");
  fireEvent.change(inputEl, { target: { value: testValue } });
  fireEvent.click(searchBtn);
  const result = await screen.findByRole("list");
  expect(result).toBeInTheDocument();
});
