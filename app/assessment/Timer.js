
import React from 'react';
import './Timer.css'
const Timer = () => {
    return (
        <>
            <div className='TimerSquareBox'>
                <div className='TimerCircleSquare '>
                    <div className='circleOne'>
                        <div className='circleTwo'>
                            <div className='TimerText'>30:
                                {/* <div className=''>:</div> */}
                                00</div>
                            <div className='nimSec'>nims sec</div>
                        </div>
                    </div>
                </div>
                <div className='RemainingTimeDiv'>
                    Remaining Time
                </div>
            </div>
        </>
    );
}

export default Timer;
