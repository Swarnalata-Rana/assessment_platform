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
    
    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions?limit=40')
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    return (
        <div className='mainPage'>
            <AssessmentHeader />
            <div className='mainwidthBgcolor'>
                <div className='secondPageMainDiv'>
                    <div className='secondPageMainDiv1'>
                        <div className='medeaQuerryTimerFilterComponent'>
                            <div className='TimerFilterDiv'>
                                <Timer />
                                <Filter

                                />
                                <FilterModal
                                />
                            </div>
                        </div>
                        <div className='mainQuestionDiv'>
                            {questions.map((data, idx) => (
                                <Question
                                    data={data}
                                    index={idx}
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


