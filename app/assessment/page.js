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
    const [attemptedCount, setAttemptedCount] = useState(0);//work how many attempt count
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);//workstore the attemppt question
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options for each question

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

    // const handleAttempt = (questionId, selectedOption) => {
    //     if (!attemptedQuestions.includes(questionId)) {
    //         setAttemptedCount((prev) => prev + 1);
    //         setAttemptedQuestions((prev) => [...prev, questionId]);
    //     }
    //     setSelectedOptions((prev) => ({
    //         ...prev,
    //         [questionId]: selectedOption,
    //     }));
    // };

    const handleAttempt = (questionId, selectedOption) => {
        // Separate the variables first
        const newAttemptedQuestions = [...attemptedQuestions];
        const newSelectedOptions = { ...selectedOptions };
    
        // Update attempted questions and count if not already attempted
        if (!newAttemptedQuestions.includes(questionId)) {
            newAttemptedQuestions.push(questionId);
            setAttemptedCount(attemptedCount + 1); // Increment count
        }
    
        // Store the selected option for the question
        newSelectedOptions[questionId] = selectedOption;
    
        // Update state using the variables
        setAttemptedQuestions(newAttemptedQuestions);
        setSelectedOptions(newSelectedOptions);
    };
    

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
                                    attemptedCount={attemptedCount}
                                    attemptedQuestions={attemptedQuestions} 

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
                                    onAttempt={handleAttempt}
                                    selectedOption={selectedOptions[data.id]} // Pass selected option for each question
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


