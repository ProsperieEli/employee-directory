import { render, screen } from "@testing-library/react";
import App from "./App";
import { UserProvider } from "../src/components/context/UserContext";
import { ProfileProvider } from "../src/components/context/ProfileContext";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <UserProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
