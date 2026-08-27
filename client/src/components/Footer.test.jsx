import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders brand logo and title", () => {
    render(<Footer />);
    expect(screen.getByAltText(/Skill Nest Logo/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Skill Nest/i })).toBeInTheDocument();
  });

  it("renders key navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /Jobs/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Resume/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /MCQ/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  });
});
