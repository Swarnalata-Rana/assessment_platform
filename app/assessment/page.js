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
    const questionsPerPage = 5;


    if (questions.length === 0) {
        fetch('https://the-trivia-api.com/v2/questions?limit=40')
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setAllQuestions(data);
            })
            .catch((err) => console.error("Error:", err));
    }

    const startIndex = (currentPage - 1) * questionsPerPage;
    const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

    return (
        <>
            <div className='mainPage'>
                <AssessmentHeader setCurrentPage={setCurrentPage} />
                <div className='mainwidthBgcolor'>
                    <div className='secondPageMainDiv'>
                        <div className='secondPageMainDiv1'>
                            <div className='medeaQuerryTimerFilterComponent'>
                                <div className='TimerFilterDiv'>
                                    <Timer />
                                    <Filter allQuestions={allQuestions} setQuestions={setQuestions} setCurrentPage={setCurrentPage} />
                                    <FilterModal />
                                </div>
                            </div>
                            <div className='mainQuestionDiv'>
                                {currentQuestions.map((ques, index) => (
                                    <Question key={index} data={ques} index={startIndex + index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Page;
