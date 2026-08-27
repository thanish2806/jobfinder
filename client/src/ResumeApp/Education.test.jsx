import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Education from "./Education";

describe("Education Component", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Education />
      </BrowserRouter>
    );

  it("renders Education section headers properly", () => {
    renderComponent();
    expect(screen.getByText(/Educational Details/i)).toBeInTheDocument();
    expect(screen.getByText(/College\/University Details/i)).toBeInTheDocument();
  });

  it("updates college form input state on user change", () => {
    renderComponent();
    const collegeInputs = screen.getAllByLabelText(/College Name/i);
    fireEvent.change(collegeInputs[0], { target: { value: "MIT" } });
    expect(collegeInputs[0].value).toBe("MIT");
  });

  it("persists form state to localStorage on input change", () => {
    renderComponent();
    const collegeInputs = screen.getAllByLabelText(/College Name/i);
    fireEvent.change(collegeInputs[0], { target: { value: "Stanford University" } });

    const storedData = JSON.parse(localStorage.getItem("educationData"));
    expect(storedData.college).toBe("Stanford University");
  });

  it("renders navigation section links", () => {
    renderComponent();
    expect(screen.getByRole("link", { name: /Profile Section/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Project Section/i })).toBeInTheDocument();
  });
});
