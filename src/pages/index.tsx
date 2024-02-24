import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import React from "react";
import Match from "@/entities/Match";
import { End, Footer, Points, Scoreboard, Time } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // TIMER VALUES
  let [tiempo, setTiempo] = useState(0);
  const interval = React.useRef<number | null>(null);

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

  const [match] = useState(
    new Match(handleBallPossessionOnMatch, handleMatchFinished)
  );

  const handleStart = React.useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const handlePause = React.useCallback(() => {
    setIsPaused(true);
    setIsActive(true);
  }, []);

  const handleResumen = React.useCallback(() => {
    setIsPaused(false);
    setIsActive(true);
  }, []);

  const handleReset = React.useCallback(() => {
    match.clear();
    setIsActive(false);
    setFinish(false);
    setTiempo(0);
    setPointsTeamA(0);
    setPointsTeamB(0);
  }, [match]);

  const handleBallPossession = React.useCallback(() => {
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

  React.useEffect(() => {
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
  }, [isActive, isPaused, ballPossession, match, finish]);

  return (
    <>
      <Head>
        <title>Scoreboard</title>
        <meta name="description" content="Padel Scoreboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="App">
          <div className="main-layout" id="mainApp">
            <End show={finish} handleReset={handleReset} />
            <Scoreboard
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
      </main>
    </>
  );
}
