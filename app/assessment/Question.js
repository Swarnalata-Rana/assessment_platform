// "use client";

// import React, { useState, useEffect } from 'react';
// import './Question.css';

// const Question = ({ data, index, onAttempt }) => {
//     const [shuffledOptions, setShuffledOptions] = useState([]);
//     const [selectedOption, setSelectedOption] = useState(null); // Track which option is selected

//     useEffect(() => {
//         const options = [data.correctAnswer, ...data.incorrectAnswers];
//         const shuffled = options.sort(() => Math.random() - 0.5);
//         setShuffledOptions(shuffled);
//         setSelectedOption(null); // Reset selection when question changes
//     }, [data]);

//     const handleOptionSelect = (e) => {
//         setSelectedOption(e.target.value);
//         onAttempt(data.id); // Pass the question ID (not index)
//     };

//     return (
//         <>
//             <div className='mainQuestionDiv1'>
//                 <h4 className='Question1'>QUESTION {index + 1}</h4>
//                 <p className='score1'>
//                     Score {data.difficulty === 'easy' ? 10 : data.difficulty === 'medium' ? 15 : 20}
//                 </p>
//             </div>
//             <div className='mainQuestionDivWhiteBox'>
//                 <div className='questionDiv'>
//                     {data.question.text}
//                 </div>
//                 <div className='optionsMainDiv'>
//                     <ul className="options">
//                         {shuffledOptions.map((option, i) => (
//                             <li key={i}>
//                                 <input
//                                     type='radio'
//                                     className='radio'
//                                     id={`option-${index}-${i}`}
//                                     name={`question-${index}`}
//                                     value={option}
//                                     // checked={selectedOption === option}
//                                     onChange={handleOptionSelect}
//                                 />
//                                 <label htmlFor={`option-${index}-${i}`}>{option}</label>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Question;


"use client";

import React, { useState, useEffect } from 'react';
import './Question.css';

const Question = ({ data, index, onAttempt, selectedOption }) => {
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        const options = [data.correctAnswer, ...data.incorrectAnswers];
        const shuffled = options.sort(() => Math.random() - 0.5);
        setShuffledOptions(shuffled);
    }, [data]);

    const handleOptionSelect = (e) => {
        onAttempt(data.id, e.target.value); // Send questionId and selected option to parent
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
                    <ul className="options">
                        {shuffledOptions.map((option, i) => (
                            <li key={i}>
                                <input
                                    type='radio'
                                    className='radio'
                                    id={`option-${index}-${i}`}
                                    name={`question-${data.id}`} // Important: use question id not index
                                    value={option}
                                    checked={selectedOption === option} // Maintain selected option
                                    onChange={handleOptionSelect}
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
