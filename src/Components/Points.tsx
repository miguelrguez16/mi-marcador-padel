import React from "react";
import "../assets/Points.css";

import { POINTS } from "../utils";
import { BiTennisBall } from "react-icons/bi";

interface Props {
  pointsTeamA: number;
  pointsTeamB: number;
  incrementPointsATeam: any;
  incrementPointsBTeam: any;
  ballPossession: boolean;
  changeBallPossession: any;
}

const Points = ({
  pointsTeamA,
  pointsTeamB,
  incrementPointsATeam,
  incrementPointsBTeam,
  ballPossession,
  changeBallPossession,
}: Props) => {
  let pta = POINTS[pointsTeamA];
  let ptb = POINTS[pointsTeamB];
  return (
    <>
      <h2 className="titulo-puntos">Points</h2>
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
        <span className="name-team-a">Team 1</span>
        <span className="name-team-b">Team 2</span>
      </div>
      <div className="container-puntos nombres-equipos">
        <div onClick={changeBallPossession} className="tennis-ball">
          {ballPossession ? <BiTennisBall /> : <></>}
        </div>
        <div onClick={changeBallPossession} className="tennis-ball">
          {!ballPossession ? <BiTennisBall /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Points;
