import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Contact from "./Contact";

describe("Contact Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

  it("renders Contact Us heading and intro", () => {
    renderComponent();
    expect(screen.getByRole("heading", { name: /^Contact Us$/i })).toBeInTheDocument();
    expect(
      screen.getByText(/If you have any feedback or questions/i)
    ).toBeInTheDocument();
  });

  it("displays contact details", () => {
    renderComponent();
    expect(screen.getByText(/Phone: 9356678182/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: abhijitkhyade@gmail.com/i)).toBeInTheDocument();
  });

  it("renders social links", () => {
    renderComponent();
    expect(screen.getByText(/Linkden/i)).toBeInTheDocument();
  });
});
