import React from 'react'
import Header from '../Components/Header';
import './Score.css'
import ResultShow from './ResultShow';
const Score = () => {
    return (
        <>
            <Header />
            <div className='mainScoreDiv'>
                <ResultShow />
                <div className='checkYourAns'>CHECK YOUR ANSWERS</div>
                <div className='lineScore'></div>

                <div className='mainLastPage'>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='Check.png' />
                            <p>10</p>
                            <p>Q1</p>
                        </div>
                        <div href='modalform' className='plusImg'>
                            <img src='whiteMinus.png' />
                        </div>
                    </div>

                    <div className='mainQuestionDivWhiteBox'>
                        <div className='questionDiv'>
                            <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                        </div>
                        <div className='optionsMainDiv'>
                            <ul class="options">
                                <li>
                                    <input type="radio" />
                                    <label for="paris">Tarapore Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Tarapore Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Swaran Singh Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Balwantrai Mehta Committee</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mainLastPage'>
                    <div className='lineScore1'></div>
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='wrong.png' />
                            <p>00</p>
                            <p>Q2</p>
                        </div>
                        <div className='plusImg'>
                            <img src='whiteMinus.png' />
                        </div>
                    </div>

                    <div className='mainQuestionDivWhiteBoxRed'>
                        <div className='questionDiv'>
                            <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                        </div>
                        <div className='optionsMainDiv'>
                            <ul class="options">
                                <li>
                                    <input type="radio" />
                                    <label  >Tarapore Committee</label>
                                </li>
                                <li style={{ border: '1px solid green', width: '257px' }}>
                                    <input type="radio" />
                                    <label >Tarapore Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Swaran Singh Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Balwantrai Mehta Committee</label>
                                </li>
                            </ul>
                        </div>
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
                <div className='mainLastPage' >
                    <div className='scoreCurrectMaoinDiv'>
                        <div className='right10PlusMainDiv'>
                            <img className='rightImg' src='exclamation.png' />
                            <p>10</p>
                            <p>Q1</p>
                        </div>
                        <div href='modalform' className='plusImg'>
                            <img src='whiteMinus.png' />
                        </div>
                    </div>

                    <div className='mainQuestionDivWhiteBox' style={{ border: '1px solid white' }}>
                        <div className='questionDiv'>
                            <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                        </div>
                        <div className='optionsMainDiv'>
                            <ul class="options">
                                <li>
                                    <input type="radio" />
                                    <label for="paris">Tarapore Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Tarapore Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Swaran Singh Committee</label>
                                </li>
                                <li>
                                    <input type="radio" />
                                    <label >Balwantrai Mehta Committee</label>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Score;