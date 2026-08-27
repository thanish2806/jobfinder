import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

  it("renders brand logo and title", () => {
    renderComponent();
    expect(screen.getByText(/SKILL NEST/i)).toBeInTheDocument();
  });

  it("renders key navigation links for logged-out state", () => {
    renderComponent();
    const homeLinks = screen.getAllByRole("link", { name: /Home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    const jobsLinks = screen.getAllByRole("link", { name: /Jobs/i });
    expect(jobsLinks.length).toBeGreaterThan(0);
    const resumeLinks = screen.getAllByRole("link", { name: /Resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("renders Login and Sign Up links", () => {
    renderComponent();
    const loginLinks = screen.getAllByRole("link", { name: /Login/i });
    expect(loginLinks.length).toBeGreaterThan(0);
    const signupLinks = screen.getAllByRole("link", { name: /Sign Up/i });
    expect(signupLinks.length).toBeGreaterThan(0);
  });
});
