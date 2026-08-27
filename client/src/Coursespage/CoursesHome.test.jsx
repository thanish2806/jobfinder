import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import CoursesHome from "./CoursesHome";

describe("CoursesHome Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <CoursesHome />
      </BrowserRouter>
    );

  it("renders course list heading and cards", () => {
    renderComponent();
    expect(screen.getByText(/HTML & CSS Basics/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript Essentials/i)).toBeInTheDocument();
    expect(screen.getByText(/React for Beginners/i)).toBeInTheDocument();
    expect(screen.getByText(/AI & Machine Learning Intro/i)).toBeInTheDocument();
  });

  it("displays course durations and details", () => {
    renderComponent();
    expect(screen.getByText(/Learn the fundamentals of web development/i)).toBeInTheDocument();
  });

  it("triggers enroll action on button click", () => {
    renderComponent();
    const enrollButtons = screen.getAllByRole("button", { name: /^Enroll$/i });
    expect(enrollButtons.length).toBeGreaterThan(0);

    fireEvent.click(enrollButtons[0]);
    expect(
      screen.getByText(/You have successfully enrolled in "HTML & CSS Basics"/i)
    ).toBeInTheDocument();
  });
});
