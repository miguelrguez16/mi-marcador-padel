import React from 'react';
import "../assets/Points.css";

function Points({ pointsTeamA, pointsTeamB, incrementPointsATeam, incrementPointsBTeam }) {

    let points = ['0', '15', '30', '40', '-'];
    let pta = points[pointsTeamA];
    let ptb = points[pointsTeamB];
    return (
        <div>
            <div className='titulo-puntos'>Points</div>
            <div className='container-puntos'>
                <span
                    className='point-team-a'
                    onClick={incrementPointsATeam}>
                    {pta}
                </span>
                <span className='rotate-hor-center'> vs </span>
                <span
                    className='point-team-b'
                    onClick={incrementPointsBTeam}>
                    {ptb}
                </span>
            </div>

            <div className='container-puntos nombres-equipos'>
                <span className='name-team-a'>Equipo 1</span>
                <span className='name-team-b'>Equipo 2</span>
            </div>
        </div>
    );
}

export default Points;
