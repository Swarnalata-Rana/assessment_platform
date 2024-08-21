// import React from 'react'

// const Timer = () => {
//     return (
//         <>
//             <div className='TimerSquareBOx'>
//                 <div className='TimerCircleSquare'>
//                     <div></div>
//                 </div>
//                 <div className='RemainingTimeDiv'>
//                     Remaining Time</div>
//             </div>
//         </>
//     )
// }

// export default Timer;

import React from 'react';

const Timer = () => {
    return (
        <>
            <div className='TimerSquareBox'>
                <div className='circleFirst'>
                    <div className='circleTow'>
                        <div className='circle'>
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
