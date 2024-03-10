"use client";

import "./components/Styles/Global.css";
import React from "react";
import { End } from "./components/End";
import { Scoreboard } from "./components/Scoreboard";
import { Points } from "./components/Points";
import Match from "./components/Match";
import { Time } from "./components/Time";
import { Footer } from "./components/Footer";
import Head from "next/head";

import { Abril_Fatface } from "next/font/google";
const abel = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const [tiempo, setTiempo] = React.useState(0);
  const [finish, setFinish] = React.useState(false);
  const [pointsTeamA, setPointsTeamA] = React.useState(0);
  const [pointsTeamB, setPointsTeamB] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const interval = React.useRef<number | null>(null);
  const [ballPossession, setBallPossession] = React.useState(true);

  const handleBallPossessionOnMatch = (e: boolean) => {
    setBallPossession(e);
  };

  const handleMatchFinished = (e: boolean) => {
    setFinish(e);
  };

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

  const [match] = React.useState(
    new Match(handleBallPossessionOnMatch, handleMatchFinished)
  );

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
        <title>Marcador Padel</title>
        <meta property="og:title" content="Marcador Padel" key="title" />
        <meta
          property="description"
          content="Marcador para registro de padel"
        />
      </Head>
      <div className="App">
        <section className="container-title">
          <h1
            style={{
              fontFamily: abel.className,
              textTransform: "uppercase",
            }}>
            Marcador de Padel
          </h1>
        </section>
        <section className="layout">
          <div className="header">
            <End show={finish} handleReset={handleReset} />
            <Scoreboard
              setOne={match.setOne}
              setTwo={match.setTwo}
              setThree={match.setThree}
            />
          </div>
          <div className="main">
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
          <div className="footer">
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
        </section>
      </div>
    </>
  );
}
