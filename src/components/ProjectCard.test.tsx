import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(
      <ProjectCard
        title="Portfolio Website"
        description="A sample portfolio project"
        imageUrl="https://example.com/image.png"
        projectUrl="https://example.com"
      />,
    );

    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
  });
});
