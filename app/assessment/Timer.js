
import React from 'react';
import './Timer.css';

const Timer = ({ }) => {

    return (
        <div className='TimerSquareBox'>
            <div className='circleOne'

            >
                <div className='circleTwo'>
                    <div className='TimerText'>
                        <div>50</div>
                        <div className='colonBlck'>:</div>
                        <div>23</div>
                    </div>
                    <div className='minSec'>
                        <div>min</div>
                        <div>sec</div>
                    </div>
                </div>
            </div>
            <div className='RemainingTimeDiv'>
                Remaining Time
            </div>
        </div>
    );
};

export default Timer;