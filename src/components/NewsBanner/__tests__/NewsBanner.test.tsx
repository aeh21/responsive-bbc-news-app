import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NewsBanner from "..";

describe("NewsBanner", () => {
  it("should render the name of the country if pathname matches /news/:countryCode", () => {
    const screen = render(
      <MemoryRouter initialEntries={[{ pathname: "/news/gb" }]}>
        <NewsBanner />
      </MemoryRouter>
    );

    expect(screen.getByText("United Kingdom")).toBeVisible();
  });

  it("should render the word Countries if pathanme does not match /news/:countryCode", () => {
    const screen = render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <NewsBanner />
      </MemoryRouter>
    );

    expect(screen.getByText("Countries")).toBeVisible();
  });
});
