import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetails from "@/features/users/UserDetails";
import { MemoryRouter } from "react-router-dom";

describe("UserDetails", () => {
  test('наявність тексту "User Details" на сторінці', () => {
    render(
      //використовуємо MemoryRouter для переключення між сторінками
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );
    const userDetailsText = screen.getByText(/Name/i);
    expect(userDetailsText).toBeInTheDocument();
  });

  test("чи отримуємо ми деталі користувача", async () => {
    const fetchUsers = await fetch(import.meta.env.VITE_USERS_URL + "/1");
    expect(fetchUsers.ok).toBe(true);
  });

  test("чи є на сторінці кнопка 'На головну'", async () => {
    render(
      //використовуємо MemoryRouter для переключення між сторінками
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );
    const btnHome = screen.getByText(/На головну/i);
    expect(btnHome).toBeInTheDocument();
  });
});
