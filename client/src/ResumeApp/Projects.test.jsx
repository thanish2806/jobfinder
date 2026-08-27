import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Projects from "./Projects";

describe("Projects Component", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );

  it("renders Projects header properly", () => {
    renderComponent();
    expect(screen.getByText(/Projects Details/i)).toBeInTheDocument();
  });

  it("adds a new project when 'Add Project' button is clicked", () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: /Add Project/i });
    fireEvent.click(addButton);

    expect(screen.getByText(/Project 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Title/i)).toBeInTheDocument();
  });

  it("allows typing into project fields and saves to localStorage", () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: /Add Project/i });
    fireEvent.click(addButton);

    const titleInput = screen.getByLabelText(/Project Title/i);
    fireEvent.change(titleInput, { target: { value: "AI Job Matcher" } });

    expect(titleInput.value).toBe("AI Job Matcher");
    const stored = JSON.parse(localStorage.getItem("projectsData"));
    expect(stored[0].title).toBe("AI Job Matcher");
  });

  it("deletes a project when delete icon is clicked", () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: /Add Project/i });
    fireEvent.click(addButton);

    expect(screen.getByText(/Project 1/i)).toBeInTheDocument();
    const deleteIcon = screen.getByTestId("DeleteIcon");
    const deleteButton = deleteIcon.closest("button");
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Project 1/i)).not.toBeInTheDocument();
  });
});
