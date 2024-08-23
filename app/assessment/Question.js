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
                    Which of the following committees recommended inclusion of fundamental duties ?
                </div>
                <div className='optionsMainDiv'>
                    <ul class="options">
                        <li>
                            <input type="radio" />
                            <label >Tarapore Committee</label>
                        </li>
                        <li>
                            <input type="radio" />
                            <label>Tarapore Committee</label>
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
            <div className='gapAssessment'></div>

        </>
    )
}

export default Question;
