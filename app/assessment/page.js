"use client";
import React, { useState, useEffect } from 'react';
import './Assessment.css';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
import AssessmentHeader from './AssessmentHeader';
import FilterModal from './FilterModal';

const Page = () => {
    const [questions, setQuestions] = useState([]);//used for displaying and changing.
    const [currentPage, setCurrentPage] = useState(1);//work for pagination 1 to ...8 page tk
    const [allQuestions, setAllQuestions] = useState([]);//work for filter its a master copy data
    const [attemptedCount, setAttemptedCount] = useState(0);//work how many attempt count
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);//workstore the attemppt question
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options for each question
    const [score, setScore] = useState({});
    const [activePage, setActivePage] = useState(1);//work for bg color

    const questionsPerPage = 5;

    //fecth the data n
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
    const totalPages = Math.ceil(questions.length / questionsPerPage); //when user ckick any filter score at that time need page only display


    //Filter
    const unattemptedCount = allQuestions.length - attemptedCount;
    const handleAttempt = (questionId, selectedOption) => {
        // Separate the variables first
        const newAttemptedQuestions = [...attemptedQuestions];
        const newSelectedOptions = { ...selectedOptions };

        // Update attempted questions and count if not already attempted
        if (!newAttemptedQuestions.includes(questionId)) {
            newAttemptedQuestions.push(questionId);
            setAttemptedCount(attemptedCount + 1); // Increment attemt question 
        }

        // Store the selected option for the question. when user click the attempt btn at that time its display
        newSelectedOptions[questionId] = selectedOption;

        // Update state using the variables
        setAttemptedQuestions(newAttemptedQuestions);
        setSelectedOptions(newSelectedOptions);
    };

    const handleSubmit = () => {
        let correctCount = 0;
        let wrongCount = 0;

        questions.forEach((question) => {
            const selected = selectedOptions[question.id];
            const correct = question.correctAnswer;

            console.log(`Q: ${question.question.text}`);
            console.log(`Selected: ${selected}, Correct: ${correct}`);

            if (selected) {
                if (selected === correct) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        });

        // const totalQuestions = questions.length;
        // const attempted = Object.keys(selectedOptions).length;
        // const unattempted = totalQuestions - attempted;

        setScore({ correctCount, wrongCount });

        alert(
            `Score:${correctCount}/40\n Unattempted: ${unattemptedCount}\n Correct: ${correctCount}\n Incorrect: ${wrongCount}`
        );
    };



    return (
        <div className='mainPage'>
            <AssessmentHeader
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                setActivePage={setActivePage}
                activePage={activePage}
                onSubmit={handleSubmit}
            />
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
                                    // activePage={activePage}
                                    setActivePage={setActivePage}
                                    attemptedCount={attemptedCount}
                                    unattemptedCount={unattemptedCount}
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


