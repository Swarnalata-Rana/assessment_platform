"use client";
import React, { useState, useEffect } from 'react';
import './Assessment.css';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
import AssessmentHeader from './AssessmentHeader';
import FilterModal from './FilterModal';

const Page = () => {
    const [questions, setQuestions] = useState([]);//displaed 40 question with options
    const [currentPage, setCurrentPage] = useState(1);//work for pagination 1 to ...8 page tk
    const [allQuestions, setAllQuestions] = useState([]);//work for filter its a master copy data


    const questionsPerPage = 5;
    
    //fecth the data
    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions?limit=40')
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
                setAllQuestions(data);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    //pagination
    const startIndex = (currentPage - 1) * questionsPerPage;
    const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

    return (
        <div className='mainPage'>
            <AssessmentHeader setCurrentPage={setCurrentPage} />
            <div className='mainwidthBgcolor'>
                <div className='secondPageMainDiv'>
                    <div className='secondPageMainDiv1'>
                        <div className='medeaQuerryTimerFilterComponent'>
                            <div className='TimerFilterDiv'>
                                <Timer />
                                <Filter

                                    setQuestions={setQuestions}
                                    allQuestions={allQuestions}
                                    setCurrentPage={setCurrentPage}

                                />
                                <FilterModal
                                />
                            </div>
                        </div>
                        <div className='mainQuestionDiv'>
                            {currentQuestions.map((data, index) => (
                                <Question
                                    key={index}
                                    data={data}
                                    index={startIndex + index}
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


