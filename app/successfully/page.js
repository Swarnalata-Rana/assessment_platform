import React from 'react'
import Header from '../Components/Header';

const page = () => {
    return (
        <>
            <div className='container'>
                <Header />
            </div>
            <div className='container'>
                <div className='successfullyMainDiv'>
                    <div className='whiteBoxSuccessfully'>
                        <div className='maindivSumnited'>
                            <img src='' />
                            <div className='successfullyDiv'>Successfully Sumbitted</div>
                            <h6>Thank you for completing the test! </h6>
                            <p>
                                Review your results and keep practicing.
                                Great job and keep up the hard work!
                            </p>
                        </div>
                        <div className='ckeckScore'>
                            <a className='scoreATag' href='score'>Check Your Score</a>
                        </div>
                    </div>
                    <div className='gapDiv2'></div>
                </div>
            </div>

        </>
    )
}

export default page;