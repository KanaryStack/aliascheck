import { ThemeProvider } from "@mui/styles";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { theme } from "../../../utils/theme";
import SearchBox from "./index";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("SearchBox", () => {
  beforeEach(() => cleanup());

  it("Load and display the search box", () => {
    render(
      <Wrapper>
        <SearchBox />
      </Wrapper>
    );

    const searchButton = screen.getByRole("button", { name: /search/i });
    const usernameInput = screen.getByRole("textbox", {
      name: /Enter username/,
    });

    expect(usernameInput).toBeInTheDocument();

    expect(screen.getByTestId("hint")).toHaveTextContent(
      "By using our service you accept our Terms of Service and Privacy Policy."
    );

    expect(searchButton).toBeInTheDocument();

    expect(searchButton).toHaveTextContent(/search/i);

    expect(usernameInput).toHaveValue("");

    expect(usernameInput).toBeRequired();

    expect(fireEvent.click(searchButton)).toBe(true);
  });
});
