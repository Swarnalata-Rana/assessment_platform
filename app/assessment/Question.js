import './Question.css'

const Question = ({ data, index }) => {

    const options = [data.correctAnswer, ...data.incorrectAnswers]
    const suffuleOptions = options.sort(() => Math.random() - 0.5)

    return (
        <>
            <div className='mainQuestionDiv1'>
                <h4 className='Question1'>QUESTION {index + 1}</h4>
                <p className='score1'>
                    Score {data.difficulty === 'easy' ? 10 : data.difficulty === 'medium' ? 15 : 20}
                </p>
            </div>
            <div className='mainQuestionDivWhiteBox'>
                <div className='questionDiv'>
                    {data.question.text}
                </div>
                <div className='optionsMainDiv'>
                    <ul class="options">

                        {suffuleOptions.map((option, i) => (
                            <li key={i}>
                                <input
                                    type='radio'
                                    className='redio'
                                    id={`option-${index}-${i}`}
                                    name={`question-${index}`}
                                    value={option}
                                />
                                <label htmlFor={`option-${index}-${i}`}>{option}</label>
                            </li>
                        ))}

                        {/* <li>
                            <input type="radio" className='redio' id="paris" name="capital" value="paris" />
                            <label className='answer' for="paris">{suffuleOption}</label>
                        </li>
                        <li>
                            <input type="radio" className='redio' id="london" name="capital" value="london" />
                            <label for="london">{suffuleOption}</label>
                        </li>
                        <li>
                            <input type="radio" className='redio' id="rome" name="capital" value="rome" />
                            <label for="rome">{suffuleOption}</label>
                        </li>
                        <li>
                            <input type="radio" className='redio' id="berlin" name="capital" value="berlin" />
                            <label for="berlin">{suffuleOption}</label>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Question; import React from 'react';



