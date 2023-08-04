import React from "react";
import "../assets/Points.css";

import { POINTS } from "../utils";

interface Props {
  pointsTeamA: number;
  pointsTeamB: number;
  incrementPointsATeam: any;
  incrementPointsBTeam: any;
  ballA: boolean;
  changeBallPossession: any;
}

const Points = ({
  pointsTeamA,
  pointsTeamB,
  incrementPointsATeam,
  incrementPointsBTeam,
  ballA,
  changeBallPossession,
}: Props) => {
  let pta = POINTS[pointsTeamA];
  let ptb = POINTS[pointsTeamB];
  return (
    <div>
      <div className="titulo-puntos">Points</div>
      <div className="container-puntos">
        <span className="point-team-a" onClick={incrementPointsATeam}>
          {pta}
        </span>
        <span className="rotate-hor-center"> vs </span>
        <span className="point-team-b" onClick={incrementPointsBTeam}>
          {ptb}
        </span>
      </div>

      <div className="container-puntos nombres-equipos">
        <span className="name-team-a">Equipo 1</span>
        <span className="name-team-b">Equipo 2</span>
      </div>
      <div className="container-puntos nombres-equipos">
        <span onClick={changeBallPossession}> {ballA ? "🎾" : ""}</span>
        <span onClick={changeBallPossession}>{!ballA ? "🎾" : ""}</span>
      </div>
    </div>
  );
};

export default Points;
