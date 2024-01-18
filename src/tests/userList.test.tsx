import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersList from "@/features/users/UsersList";

describe("UsersList", () => {
  test('наявність тексту "Users" на сторінці', () => {
    render(<UsersList />);
    const usersText = screen.getByText(/Users/i);
    expect(usersText).toBeInTheDocument();
  });

  test("чи отримуємо ми список користувачів", async () => {
    const fetchUsers = await fetch(import.meta.env.VITE_USERS_URL);
    expect(fetchUsers.ok).toBe(true);
  });

  test("чи у льриманому списку більше одного користувача", async () => {
    const fetchUsers = await fetch(import.meta.env.VITE_USERS_URL);
    const data = await fetchUsers.json();
    expect(data.length).toBeGreaterThan(1);
  });
});
