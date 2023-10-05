import React from "react";
import Points from "../Components/Points";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Test Points component", () => {
  let incrementPointsATeam = () => jest.fn();

  it("Render the component", () => {
    render(
      <Points
        pointsTeamA={0}
        pointsTeamB={0}
        ballPossession={false}
        incrementPointsATeam={incrementPointsATeam}
        incrementPointsBTeam={incrementPointsATeam}
        changeBallPossession={incrementPointsATeam}
      />
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Points"); // h2 -> header role
  });
});
