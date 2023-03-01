import React from 'react';
import '../assets/Sets.css'

function Sets({ setOne, setTwo, setThree }) {

    return (
        <div className='sets-container'>
            <div className='title-sets'>Sets</div>
            <div className='marcador'>
                <div className='team-one-sets'>
                    
                    <span id="to-setone" className='value-set ateam'>{setOne[0]}</span>
                    <span id="to-settwo" className='value-set ateam'>{setTwo[0]}</span>
                    <span id="to-setthree" className='value-set ateam'>{setThree[0]}</span>
                </div>
                <div className='team-two-sets'>
                    <span id="tt-setone" className='value-set bteam'>{setOne[1]}</span>
                    <span id="tt-settwo" className='value-set bteam'>{setTwo[1]}</span>
                    <span id="tt-setthree" className='value-set bteam'>{setThree[1]}</span>
                </div>
            </div>
        </div>
    );
}

export default Sets;
