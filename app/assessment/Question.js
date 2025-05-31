"use client"
import React from 'react';
import './Question.css';

const Question = ({ questionObj, index, onAttempt }) => {

    const handleOptionSelect = (e) => {
        const selectedOption = e.target.value;
        onAttempt(questionObj.id, selectedOption);
    };

    return (
        <>
            <div className='mainQuestionDiv1'>
                <h4 className='Question1'>QUESTION {index + 1}</h4>
                <p className='score1'>
                    Score {questionObj.difficulty === 'easy' ? 10 : questionObj.difficulty === 'medium' ? 15 : 20}
                </p>
            </div>
            <div className='mainQuestionDivWhiteBox'>
                <div className='questionDiv'>
                    {questionObj.question.text}
                </div>
                <div className='optionsMainDiv'>
                    <ul className='options'>
                        {questionObj.options.map((option, i) => (
                            <li key={i}>
                                <input
                                    type='radio'
                                    className='radio'
                                    id={`option-${index}-${i}`}
                                    name={`question-${questionObj.id}`}
                                    value={option}
                                    onChange={handleOptionSelect}
                                    checked={questionObj.selectedOption === option}
                                />
                                <label className='labelTag' htmlFor={`option-${index}-${i}`}>{option}</label>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Question;
