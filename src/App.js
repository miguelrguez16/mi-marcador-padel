import './App.css';
import React from 'react';
import Sets from './Components/Sets';
import Points from './Components/Points';
import Time from './Components/Time';
import Footer from './Components/footer';
import { useState, useEffect } from 'react';


function App() {
  // TIMER VALUES
  let [tiempo, setTiempo] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [isPaused, setIsPaused] = useState(true);

  // Puntos
  let [pointsTeamA, setPointsTeamA] = useState(0);
  let [pointsTeamB, setPointsTeamB] = useState(0);

  let [setOne, setSetOne] = useState([0, 0]);
  let [setTwo, setSetTwo] = useState([0, 0]);
  let [setThree, setSetThree] = useState([0, 0]);
  let [indiceCurrentSet, setIndiceCurrentSet] = useState(0);




  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTiempo(0);
    setPointsTeamA(0);
    setPointsTeamB(0);
  };


  // Points
  const incrementPointsATeam = () => {
    let currentPointA = pointsTeamA;
    if (currentPointA < 3) {
      currentPointA = currentPointA + 1;
      setPointsTeamA(currentPointA);
    }
    else {
      // estamos en 40
      puntoSetEquipo(0);
      setPointsTeamA(0);
      setPointsTeamB(0);
    }

  }
  const incrementPointsBTeam = () => {
    let currentPointB = pointsTeamB;
    if (currentPointB < 3) {
      currentPointB = currentPointB + 1;
      setPointsTeamB(currentPointB);
    }
    else {
      // estamos en 40
      puntoSetEquipo(1);
      setPointsTeamA(0);
      setPointsTeamB(0);
    }
  }
  const decrementsPointsATeam = () => {
    let currentPointA = pointsTeamA;
    if (currentPointA > 0) {
      currentPointA = currentPointA - 1;
      setPointsTeamA(currentPointA)
    }
  }
  const decrementsPointsBTeam = () => {
    let currentPointB = pointsTeamB;
    if (currentPointB > 0) {
      currentPointB = currentPointB - 1;
      setPointsTeamB(currentPointB)
    }
  }

  const puntoSetEquipo = (teamIndex) => {
    let tmp = 0;
    // debugger;
    switch (indiceCurrentSet) {
      case 0:
        tmp = setOne[teamIndex] + 1;
        setOne[teamIndex] = tmp;
        break;
      case 1:
        tmp = setTwo[teamIndex] + 1;
        setTwo[teamIndex] = tmp;
        break;
      case 2:
        tmp = setThree[teamIndex] + 1;
        setThree[teamIndex] = tmp;
        break;
      default:
        break;
    }
    checkSet();
  }

  const getPointsFromCurrentSet = (teamIndex) => {
    let valueToReturn = 0;
    switch (indiceCurrentSet) {
      case 0:
        valueToReturn = setOne[teamIndex];
        break;
      case 1:
        valueToReturn = setTwo[teamIndex];
        break;
      case 2:
        valueToReturn = setThree[teamIndex];
        break;
      default:
        break;
    }
    return valueToReturn;
  }


  const checkSet = () => {
    let pointsA = getPointsFromCurrentSet(0);
    let pointsB = getPointsFromCurrentSet(1);
    let difference = Math.abs(pointsA - pointsB);

    if ((pointsA >= 6 || pointsB >= 6) && difference >= 2) {
      indiceCurrentSet = indiceCurrentSet + 1;
      setIndiceCurrentSet(indiceCurrentSet);
    }
  }

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTiempo((tiempo) => tiempo + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };


  }, [isActive, isPaused, setOne, setTwo, setThree, indiceCurrentSet]);

  return (
    <div className="App">
      <div className="main-layout">
        <Sets setOne={setOne} setTwo={setTwo} setThree={setThree} />
        <Points
          pointsTeamA={pointsTeamA}
          pointsTeamB={pointsTeamB}
          incrementPointsATeam={incrementPointsATeam}
          incrementPointsBTeam={incrementPointsBTeam}
        />
        <Time tiempo={tiempo} />
      </div>
      <div className="footer-layout">
        <Footer active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
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
