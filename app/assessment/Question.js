"use client"
import React, { useEffect, useState } from 'react';
import './Question.css';

const Question = ({ data, index, onAttempt }) => {
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        const options = [data.correctAnswer, ...data.incorrectAnswers];
        const shuffled = [...options].sort(() => Math.random() - 0.5);
        setShuffledOptions(shuffled);
    }, []);

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        onAttempt(data.id, selectedOption); 
    };


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
                    <ul className='options'>
                        {shuffledOptions.map((option, i) => (
                            <li key={i}>

                                <input
                                    type='radio'
                                    className='radio'
                                    id={`option-${index}-${i}`}
                                    name={`question-${data.id}`}
                                    value={option}
                                    onChange={handleChange}
                                    checked={data.selectedOption === option}
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
