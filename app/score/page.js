import React from 'react'
import Header from '../Components/Header';

const page = () => {
    return (
        <>
            <div className='container'>
                <Header />
                {/* <div className='mainDivPagination1'>
                    <div className='headerDivP2'>
                        <img className='logoImgP2' src='LogoGrp.png' />
                        <img className='QAdivP2' src='QA.png' />
                    </div>
                    <div className='headerDiv2'>
                        <div className='startTest'>Start Test</div>
                        <p className='scorePTag'>Score</p>
                    </div>
                </div> */}
                <div className='mainScoreDiv'>
                    <div className='gapDiv0'></div>
                    <div className='blackDivBox'>
                        <div className=''>
                            <p>35/40</p>
                            <p>Your Scored</p>
                        </div>
                        <div className=''>
                            <p><img src='exclamation.png' /></p>
                            <p>Unattempted: 3</p>
                        </div>
                        <div className=''>
                            <p><img src='Check.png' /></p>
                            <p>Correct: 35</p>
                        </div>
                        <div className=''>
                            <p><img src='wrong.png' /></p>
                            <p>Wrong: 2</p>
                        </div>
                    </div>
                    <div className='checkYourAns'>CHECK YOUR ANSWERS</div>
                    <div className='lineScore'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q1</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='wrong.png' />
                            <p>00</p>
                            <p>Q2</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='wrong.png' />
                            <p>00</p>
                            <p>Q3</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q4</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q5</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q6</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q7</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q8</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q9</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='exclamation.png' />
                            <p>0</p>
                            <p>Q10</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='exclamation.png' />
                            <p>0</p>
                            <p>Q11</p>
                        </div>
                        <div className='plusImg'>
                            <img src='Plus.png' />
                        </div>
                    </div>
                    <div className='lineScore1'></div>

                    <div className='gapDiv2'></div>
                </div>
            </div>
        </>
    )
}

export default page;