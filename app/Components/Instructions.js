import React from 'react'
import Header from './Header';
import Footer from './Footer';


const Instructions = () => {
    return (
        <>
            {/* <div className=''> */}
                <Header />
            {/* </div> */}
            <div className='instructionDivmain'>
                <h2 className='MCQh2'>MCQ Test Portal</h2>
                <div className='whiteBox'>
                    <div className='maindivUi'>
                        <h4 className='instructions'>Instructions</h4>
                        <p className='paragrap'>Please read the instructions carefully before you begin:</p>
                        <ul className="ulTag">
                            <li >
                                Timing: The test is timed. You have [specified time] minutes to complete all questions
                            </li>
                            <li>
                                Questions: The test comprises [number of questions] multiple-choice questions (MCQs).
                            </li>
                            <li>
                                Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.
                            </li>
                            <li>
                                Selection: Choose the best answer for each question. You can change your answers anytime before submitting.
                            </li>
                            <li>
                                Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.
                            </li>
                            <li>
                                Review: After submission, you may review your answers and scores.
                            </li>
                        </ul>
                        <p className='paragrap0'>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
                        <div className='pgOutDiv'>
                            <p className='paragrap1'>Click 'Lets Start' to begin the test. </p>
                            <h4 className='goodLuck'>Good luck!</h4>
                        </div>
                    </div>
                    <div className='LineDiv'></div>
                    <div className='letsBtnDiv'>
                        <a className='LetsStart' href='assessment'>Lets Start!</a>
                    </div>
                </div>
                {/* <div className='gapDiv'></div> */}
            </div>
        </>
    )
}

export default Instructions;