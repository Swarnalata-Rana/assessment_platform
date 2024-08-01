import React from 'react'
import Pagination from '../Components/Pagination';

const page = () => {
    return (
        <>
            <div className=''>
                <div className='container'>
                    <Pagination />
                </div>
                <div className='container'>
                    <div className='secondPageMainDiv'>
                        <div className='secondPageMainDiv1'>
                            <div className='filterinside'>
                                <div className='filter'>FILTERS</div>
                                <p className='questionScore'>Question Score</p>
                                <div class="paginationfilterbox">
                                    <a href="#">All</a>
                                    <a href="#">10</a>
                                    <a href="#">15</a>
                                    <a href="#">20</a>
                                </div>
                                <div>
                                    <p className='questionsattempted'>Questions Attempted</p>

                                </div>
                                <div className='allattemtedDiv'>
                                    <p className='all40'>All(40)</p>
                                    <p className='attemted3'>Attempted(3)</p>
                                </div>
                                <div className='Unattempted37'>Unattempted (37)</div>
                            </div>
                            <div className='mainQuestionDiv'>
                                <div className='mainQuestionDiv1'>
                                    <h4 className='Question1'>QUESTION 1</h4>
                                    <p className='score1'>Score +1</p>
                                </div>
                                <div className='mainQuestionDivWhiteBox'>
                                    <div className='questionDiv'>
                                        <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                                    </div>
                                    <div className='optionsMainDiv'>
                                        <ul class="options">
                                            <li>
                                                <input type="radio" id="paris" name="capital" value="paris" />
                                                <label className='answer' for="paris">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="london" name="capital" value="london" />
                                                <label for="london">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rome" name="capital" value="rome" />
                                                <label for="rome">Swaran Singh Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="berlin" name="capital" value="berlin" />
                                                <label for="berlin">Balwantrai Mehta Committee </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='gapAssessment'></div>

                                <div className='mainQuestionDiv1'>
                                    <h4 className='Question1'>QUESTION 1</h4>
                                    <p className='score1'>Score +1</p>
                                </div>
                                <div className='mainQuestionDivWhiteBox'>
                                    <div className='questionDiv'>
                                        <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                                    </div>
                                    <div className='optionsMainDiv'>
                                        <ul class="options">
                                            <li>
                                                <input type="radio" id="paris" name="capital" value="paris" />
                                                <label className='answer' for="paris">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="london" name="capital" value="london" />
                                                <label for="london">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rome" name="capital" value="rome" />
                                                <label for="rome">Swaran Singh Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="berlin" name="capital" value="berlin" />
                                                <label for="berlin">Balwantrai Mehta Committee </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='gapAssessment'></div>

                                <div className='mainQuestionDiv1'>
                                    <h4 className='Question1'>QUESTION 1</h4>
                                    <p className='score1'>Score +1</p>
                                </div>
                                <div className='mainQuestionDivWhiteBox'>
                                    <div className='questionDiv'>
                                        <p> Which of the following committees recommended inclusion of fundamental duties ?</p>
                                    </div>
                                    <div className='optionsMainDiv'>
                                        <ul class="options">
                                            <li>
                                                <input type="radio" id="paris" name="capital" value="paris" />
                                                <label className='answer' for="paris">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="london" name="capital" value="london" />
                                                <label for="london">Tarapore Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="rome" name="capital" value="rome" />
                                                <label for="rome">Swaran Singh Committee </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="berlin" name="capital" value="berlin" />
                                                <label for="berlin">Balwantrai Mehta Committee </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='gapDiv'></div>

                    </div>

                </div>

            </div >

        </>
    )
}

export default page;
