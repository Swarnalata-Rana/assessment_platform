// "use client"
// import React, { useState, useEffect } from 'react'
// import './Assessment.css';
// import Pagination from './Pagination';
// import Filter from './Filter';
// import Question from './Question';
// import Timer from './Timer';
// import AssessmentHeader from './AssessmentHeader';
// import Submit from './Submit';
// import FilterModal from './FilterModal';


// const page = () => {
//     // const [allQuestions, setAllQuestions] = useState([]); 
//     const [questions, setQuestions] = useState([]);

//     if (questions.length === 0) {
//         fetch('https://the-trivia-api.com/v2/questions?limit=40')
//             .then((res) => res.json())
//             .then((data) => setQuestions(data))
//             .catch((err) => console.error("Error:", err));
//     }

//     // useEffect(() => {
//     //     fetch('https://the-trivia-api.com/v2/questions?limit=40')
//     //         .then(res => res.json())
//     //         .then(data => setQuestions(data))
//     //         .catch(err => console.error(err));
//     //         console.log("runu")
//     // }, []);

//     return (
//         <>
//             <div className='mainPage'>
//                 <AssessmentHeader />
//                 <div className='mainwidthBgcolor'>
//                     <div className='secondPageMainDiv'>
//                         <div className='secondPageMainDiv1'>
//                             <div className='medeaQuerryTimerFilterComponent'>
//                                 <div className='TimerFilterDiv'>
//                                     <Timer/>
//                                     <Filter/>
//                                     <FilterModal />
//                                 </div>
//                             </div>
//                             <div className='mainQuestionDiv'>
//                                 <div className='mainQuestionDiv'>

//                                     {questions.map((ques, index) => (
//                                         <Question key={index} data={ques} index={index} />
//                                     ))}

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default page;


// "use client";
// import React, { useState, useEffect } from 'react';
// import './Assessment.css';
// import Pagination from './Pagination';
// import Filter from './Filter';
// import Question from './Question';
// import Timer from './Timer';
// import AssessmentHeader from './AssessmentHeader';
// import Submit from './Submit';
// import FilterModal from './FilterModal';

// const Page = () => {
//     const [allQuestions, setAllQuestions] = useState([]);
//     const [questions, setQuestions] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     const [attemptedCount, setAttemptedCount] = useState(0);
//     const [attemptedQuestions, setAttemptedQuestions] = useState([]);
//     const questionsPerPage = 5;

//     useEffect(() => {
//         fetch('https://the-trivia-api.com/v2/questions?limit=40')
//             .then((res) => res.json())
//             .then((data) => {
//                 setQuestions(data);
//                 setAllQuestions(data);
//             })
//             .catch((err) => console.error("Error:", err));
//     }, []);

//     // Pagination logic
//     const startIndex = (currentPage - 1) * questionsPerPage;
//     const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

//     // Handle attempt
//     const handleAttempt = (questionId) => {
//         if (!attemptedQuestions.includes(questionId)) {
//             setAttemptedCount((prev) => prev + 1);
//             setAttemptedQuestions((prev) => [...prev, questionId]);
//         }
//     };

//     return (
//         <div className='mainPage'>
//             <AssessmentHeader setCurrentPage={setCurrentPage} />
//             <div className='mainwidthBgcolor'>
//                 <div className='secondPageMainDiv'>
//                     <div className='secondPageMainDiv1'>
//                         <div className='medeaQuerryTimerFilterComponent'>
//                             <div className='TimerFilterDiv'>
//                                 <Timer />
//                                 <Filter
//                                     allQuestions={allQuestions}
//                                     setQuestions={setQuestions}
//                                     setCurrentPage={setCurrentPage}
//                                     attemptedCount={attemptedCount}
//                                     totalQuestions={allQuestions.length}
//                                 />
//                                 <FilterModal />
//                             </div>
//                         </div>
//                         <div className='mainQuestionDiv'>
//                             {currentQuestions.map((ques, idx) => (
//                                 <Question
//                                     key={ques.id}
//                                     data={ques}
//                                     index={startIndex + idx}
//                                     onAttempt={handleAttempt}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;



"use client";

import React, { useState, useEffect } from 'react';
import './Assessment.css';
import Pagination from './Pagination';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
import AssessmentHeader from './AssessmentHeader';
import Submit from './Submit';
import FilterModal from './FilterModal';

const Page = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [attemptedCount, setAttemptedCount] = useState(0);
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options for each question
    const [activePage, setActivePage] = useState(1);

    const questionsPerPage = 5;

    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions?limit=40')
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setAllQuestions(data);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    // const handleDifficultyChange = () => {
    //     setActivePage(1);  // Reset active page to 1
    //     setCurrentPage(1);  // Reset current page to 1
    // };
    // Pagination logic
    const startIndex = (currentPage - 1) * questionsPerPage;
    const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

    // Handle attempt
    const handleAttempt = (questionId, selectedOption) => {
        if (!attemptedQuestions.includes(questionId)) {
            setAttemptedCount((prev) => prev + 1);
            setAttemptedQuestions((prev) => [...prev, questionId]);
        }
        // Store the selected option for the question
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: selectedOption,
        }));
    };

    // useEffect(() => {
    //     setActivePage(currentPage); // Reset activePage whenever currentPage changes
    // }, [currentPage]);
    return (
        <div className='mainPage'>
            <AssessmentHeader setCurrentPage={setCurrentPage} activePage={activePage} setActivePage={setActivePage} />
            <div className='mainwidthBgcolor'>
                <div className='secondPageMainDiv'>
                    <div className='secondPageMainDiv1'>
                        <div className='medeaQuerryTimerFilterComponent'>
                            <div className='TimerFilterDiv'>
                                <Timer />
                                <Filter
                                    allQuestions={allQuestions}
                                    setQuestions={setQuestions}
                                    setCurrentPage={setCurrentPage}
                                    attemptedCount={attemptedCount}
                                    totalQuestions={allQuestions.length}
                                    attemptedQuestions={attemptedQuestions} 
                                    setActivePage={setActivePage}
                                />
                                <FilterModal />
                            </div>
                        </div>
                        <div className='mainQuestionDiv'>
                            {currentQuestions.map((ques, idx) => (
                                <Question
                                    key={ques.id}
                                    data={ques}
                                    index={startIndex + idx}
                                    onAttempt={handleAttempt}
                                    selectedOption={selectedOptions[ques.id]} // Pass selected option for each question
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
