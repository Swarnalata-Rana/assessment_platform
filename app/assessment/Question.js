import React from 'react'

const Question = () => {
    return (
        <>
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

        </>
    )
}

export default Question;
