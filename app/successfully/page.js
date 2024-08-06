import React from 'react'
import Header from '../Components/Header';

const page = () => {
    return (
        <>
            <div className=''>
                <Header />
            </div>
            <div className=''>
                <div className='successfullyMainDiv'>
                    <div className='gapDiv4'></div>

                    <div className='whiteBoxSuccessfully'>
                        <div className='whiteBoxSuccessfully1'>
                            <div className='maindivSumnited'>
                                <div className='rightDivTag'>
                                    <img src='Check.png' />
                                </div>
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

                    </div>
                    <div className='gapDiv2'></div>
                </div>
            </div>

        </>
    )
}

export default page;