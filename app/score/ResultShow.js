import React from 'react'

const ResultShow = () => {
    return (
        <div>
            <div className='gapDiv0'></div>
            <div className='blackDivBox'>
                <div className='mainTag35yourScored'>
                    <p className='Tag35'>35/40</p>
                    <p id='yourScore' className='yourScored'>Your Scored</p>
                </div>
                <div className='elementBox'>
                    <div className=''>
                        <p><img src='exclamation.png' /></p>
                        <p className='elementpTag'>Unattempted: 3</p>
                    </div>
                    <img className='verticalLine' src='VertivalLine.svg' />
                    <div className=''>
                        <p><img src='Check.png' /></p>
                        <p className='elementpTag'>Correct: 35</p>
                    </div>
                    <img className='verticalLine' src='VertivalLine.svg' />
                    <div className=''>
                        <p><img src='wrong.png' /></p>
                        <p className='elementpTag'>Wrong: 2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultShow;
