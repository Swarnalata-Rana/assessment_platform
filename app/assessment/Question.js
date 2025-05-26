"use client"
import React from 'react';
import './Question.css';

const Question = ({ questionBoj, index, onAttempt }) => {

    const handleOptionSelect = (e) => {
        const selectedOption = e.target.value;
        onAttempt(questionBoj.id, selectedOption);
    };

    return (
        <>
            <div className='mainQuestionDiv1'>
                <h4 className='Question1'>QUESTION {index + 1}</h4>
                <p className='score1'>
                    Score {questionBoj.difficulty === 'easy' ? 10 : questionBoj.difficulty === 'medium' ? 15 : 20}
                </p>
            </div>
            <div className='mainQuestionDivWhiteBox'>
                <div className='questionDiv'>
                    {questionBoj.question.text}
                </div>
                <div className='optionsMainDiv'>
                    <ul className='options'>
                        {questionBoj.options.map((option, i) => (
                            <li key={i}>
                                <input
                                    type='radio'
                                    className='radio'
                                    id={`option-${index}-${i}`}
                                    name={`question-${questionBoj.id}`}
                                    value={option}
                                    onChange={handleOptionSelect}
                                    checked={questionBoj.selectedOption === option}
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
