import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Experience from "./Experience";

describe("Experience Component", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Experience />
      </BrowserRouter>
    );

  it("renders Experience header properly", () => {
    renderComponent();
    expect(screen.getByText(/Experience Details/i)).toBeInTheDocument();
  });

  it("adds a new experience entry on button click", () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: /Add Experience/i });
    fireEvent.click(addButton);

    expect(screen.getByText(/Experience 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Role/i)).toBeInTheDocument();
  });

  it("updates experience input values and updates state", () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: /Add Experience/i });
    fireEvent.click(addButton);

    const roleInput = screen.getByLabelText(/Role/i);
    fireEvent.change(roleInput, { target: { value: "Full Stack Engineer" } });

    expect(roleInput.value).toBe("Full Stack Engineer");
    const stored = JSON.parse(localStorage.getItem("experienceData"));
    expect(stored[0].role).toBe("Full Stack Engineer");
  });
});
