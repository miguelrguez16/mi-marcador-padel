import "./Styles/Points.css";
import React from "react";
import { BiTennisBall } from "react-icons/bi";
import { POINTS } from "./utils";

export const Points = (props: {
  pointsTeamA: number;
  pointsTeamB: number;
  ballPossession: boolean;
  incrementPointsATeam: () => void;
  incrementPointsBTeam: () => void;
  changeBallPossession: () => void;
}) => {
  const {
    pointsTeamA,
    pointsTeamB,
    ballPossession,
    incrementPointsATeam,
    incrementPointsBTeam,
    changeBallPossession,
  } = props;

  let pta = POINTS[pointsTeamA];
  let ptb = POINTS[pointsTeamB];
  return (
    <>
      <section className="container-title">
        <span className="titulo-puntos">Puntos</span>
      </section>
      <div id="container-puntos" className="container-puntos">
        <span
          className="point-team-a rotate-hor-center"
          onClick={incrementPointsATeam}
          role="contentinfo">
          {pta}
        </span>
        <span>vs</span>
        <span
          className="point-team-b rotate-hor-center"
          onClick={incrementPointsBTeam}>
          {ptb}
        </span>
      </div>
      <div className="container-puntos nombres-equipos">
        <span className="name-team-a">Equipo 1</span>
        <span className="name-team-b">Equipo 2</span>
      </div>
      <div className="container-puntos nombres-equipos">
        <button onClick={changeBallPossession} className="tennis-ball">
          {ballPossession && <BiTennisBall />}
        </button>
        <button onClick={changeBallPossession} className="tennis-ball">
          {!ballPossession && <BiTennisBall />}
        </button>
      </div>
    </>
  );
};
