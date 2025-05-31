"use client";
import React, { useState, useEffect } from 'react';
import './Assessment.css';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
import AssessmentHeader from './AssessmentHeader';
import FilterModal from './FilterModal';

const Page = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://the-trivia-api.com/v2/questions?limit=40')
            .then((res) => res.json())
            .then((data) => {
                const updatedData = data.map((question) => {
                    const options = [question.correctAnswer, ...question.incorrectAnswers];
                    const shuffled = [...options].sort(() => Math.random() - 0.5);
                    return {
                        ...question,
                        options: shuffled,
                        selectedOption: '',
                    };
                });
                setAllQuestions(updatedData);
                setQuestions(updatedData);
            });
    }, []);

    const startIndex = (currentPage - 1) * 5;
    const currentQuestions = questions.slice(startIndex, startIndex + 5);
    const totalPages = Math.ceil(questions.length / 5);

    const handleAttempt = (questionId, selectedOption) => {
        const updatedAllQuestions = allQuestions.map((question) => {
            if (question.id === questionId) {
                return { ...question, selectedOption };
            }
            else {
                return question;
            }
        });
        setAllQuestions(updatedAllQuestions);
        setQuestions(updatedAllQuestions);
    };

    // const attemptedCount = allQuestions.filter(function (question) {
    //     return question.selectedOption !== '';
    // }).length;

    let attemptedCount = 0;
    let i = 0;

    while (i < allQuestions.length) {
        if (allQuestions[i].selectedOption !== '') {
            attemptedCount += 1;
        }
        i += 1;
    }
    console.log(attemptedCount)
    const unattemptedCount = allQuestions.length - attemptedCount;

    function getOriginalIndex(id) {
        let i = 0;
        while (i < allQuestions.length) {
            if (allQuestions[i].id === id) {
                return i;
            }
            i += 1;
        }
        console.log(i)
    }


    return (
        <div className='mainPage'>
            <AssessmentHeader
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
                currentPage={currentPage}
            // onSubmit={handleSubmit}
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
                                    attemptedCount={attemptedCount}
                                    unattemptedCount={unattemptedCount}
                                />
                                <FilterModal />
                            </div>
                        </div>
                        <div className='mainQuestionDiv'>
                            {currentQuestions.map((questionObj, index) => {
                                const originalIndex = getOriginalIndex(questionObj.id);
                                return (
                                    <Question
                                        key={index}
                                        questionObj={questionObj}
                                        index={originalIndex}
                                        onAttempt={handleAttempt}
                                    />
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;


