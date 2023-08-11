import "./App.css";
import Sets from "./Components/Scoreboard";
import Time from "./Components/Time";
import Footer from "./Components/Footer";
import Points from "./Components/Points";
import End from "./Components/End";

import React, { useState, useEffect, useCallback, useRef } from "react";

import Match from "./entities/Match";

function App() {
  // TIMER VALUES
  let [tiempo, setTiempo] = useState(0);
  const interval = useRef<number | null>(null);

  // TIMER CONTROL
  let [isActive, setIsActive] = useState(false);
  let [isPaused, setIsPaused] = useState(true);

  // Puntos
  let [pointsTeamA, setPointsTeamA] = useState(0);
  let [pointsTeamB, setPointsTeamB] = useState(0);

  // BALL POSSESSION
  let [ballPossession, setBallPossession] = useState(true);
  const handleBallPossessionOnMatch = (e: boolean) => {
    setBallPossession(e);
  };

  const [finish, setFinish] = useState(false);
  const handleMatchFinished = (e: boolean) => {
    setFinish(e);
  };

  const [match, setMatch] = useState(
    new Match(handleBallPossessionOnMatch, handleMatchFinished)
  );

  const handleStart = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const handlePause = useCallback(() => {
    setIsPaused(true);
    setIsActive(true);
  }, []);

  const handleResumen = useCallback(() => {
    setIsPaused(false);
    setIsActive(true);
  }, []);

  const handleReset = useCallback(() => {
    match.clear();
    setIsActive(false);
    setFinish(false);
    setTiempo(0);
    setPointsTeamA(0);
    setPointsTeamB(0);
  }, [match]);

  const handleBallPossession = useCallback(() => {
    setBallPossession((possession) => !possession);
  }, []);

  // Points
  const incrementPointsATeam = () => {
    let currentPointA = pointsTeamA;
    if (currentPointA < 3) {
      setPointsTeamA(currentPointA + 1);
    } else {
      match.incrementSet(0);
      setPointsTeamA(0);
      setPointsTeamB(0);
    }
  };

  const incrementPointsBTeam = () => {
    let currentPointB: number = pointsTeamB;
    if (currentPointB < 3) {
      setPointsTeamB(currentPointB + 1);
    } else {
      match.incrementSet(1);
      setPointsTeamA(0);
      setPointsTeamB(0);
    }
  };

  const decrementsPointsATeam = () => {
    let currentPointA: number = pointsTeamA;
    if (currentPointA > 0) {
      setPointsTeamA(currentPointA - 1);
    }
  };

  const decrementsPointsBTeam = () => {
    let currentPointB: number = pointsTeamB;
    if (currentPointB > 0) {
      setPointsTeamB(currentPointB - 1);
    }
  };

  useEffect(() => {
    match.setBallPossession(ballPossession);

    if (isActive && !isPaused) {
      interval.current = window.setInterval(() => {
        setTiempo((t) => t + 10);
      }, 10);
    } else {
      clearInterval(interval.current!);
    }
    return () => {
      clearInterval(interval.current!);
    };
  }, [
    isActive,
    isPaused,
    ballPossession,
    match,
    finish,
    match.setOne,
    match.setTwo,
    match.setThree,
  ]);

  return (
    <div className="App">
      <div className="main-layout">
        <End show={finish} handleReset={handleReset} />
        <Sets
          setOne={match.setOne}
          setTwo={match.setTwo}
          setThree={match.setThree}
        />
        <Points
          pointsTeamA={pointsTeamA}
          pointsTeamB={pointsTeamB}
          incrementPointsATeam={incrementPointsATeam}
          incrementPointsBTeam={incrementPointsBTeam}
          ballPossession={ballPossession}
          changeBallPossession={handleBallPossession}
        />
        <Time timer={tiempo} show={finish} />
      </div>
      <div className="footer-layout">
        <Footer
          active={isActive}
          isPaused={isPaused}
          handleReset={handleReset}
          handleStart={handleStart}
          handleResumen={handleResumen}
          handlePause={handlePause}
          incrementPointsATeam={incrementPointsATeam}
          incrementPointsBTeam={incrementPointsBTeam}
          decrementsPointsATeam={decrementsPointsATeam}
          decrementsPointsBTeam={decrementsPointsBTeam}
        />
      </div>
    </div>
  );
}

export default App;
