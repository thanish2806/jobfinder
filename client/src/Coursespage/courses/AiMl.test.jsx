import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Aiml from "./AiMl";

describe("AiMl Course Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Aiml />
      </BrowserRouter>
    );

  it("renders course banner and title", () => {
    renderComponent();
    expect(
      screen.getByText(/AI & Machine Learning Introduction/i)
    ).toBeInTheDocument();
  });

  it("renders modules and lessons from externalized lessonsData", () => {
    renderComponent();
    expect(
      screen.getByText(/Foundations of AI & Machine Learning/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/What is Artificial Intelligence\?/i)
    ).toBeInTheDocument();
  });

  it("opens lesson details modal popup on click and closes it", () => {
    renderComponent();
    const lessonTitle = screen.getByText(/What is Artificial Intelligence\?/i);
    fireEvent.click(lessonTitle);

    // Modal popup title should be visible
    const modalTitles = screen.getAllByText(/What is Artificial Intelligence\?/i);
    expect(modalTitles.length).toBeGreaterThan(1);

    // Close modal
    const closeBtn = screen.getByRole("button", { name: "×" });
    fireEvent.click(closeBtn);

    const remainingTitles = screen.getAllByText(/What is Artificial Intelligence\?/i);
    expect(remainingTitles.length).toBe(1);
  });
});
