"use client"
import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ allQuestions, setQuestions, setCurrentPage }) => {

    function handleFilter(score) {
        setCurrentPage(1);
        // setActiveButton(score)
        if (score === 'All') {
            setQuestions(allQuestions);
        }
        else {

            let difficulty = '';
            if (score === 10) {
                difficulty = 'easy';
            }
            else if (score === 15) {
                difficulty = 'medium';
            }
            else if (score === 20) {
                difficulty = 'hard';
            }

            const filteredQuestions = allQuestions.filter(question => question.difficulty === difficulty);

            setQuestions(filteredQuestions);
        }
    }


    return (
        <div className='filterMainDiv'>
            <div className='filter'>FILTERS</div>
            <p className='questionScore'>Question Score</p>

            <div className="paginationfilterbox">
                <button onClick={() => handleFilter('All')} >All</button>
                <button onClick={() => handleFilter(10)}>10</button>
                <button onClick={() => handleFilter(15)}>15</button>
                <button onClick={() => handleFilter(20)}>20</button>
            </div>
            <div>
                <p className='questionsattempted'>Questions Attempted</p>
            </div>
            <div className='allattemtedDiv'>
                <button className='all40'>All(40)</button>
                <button className='attemted3'>Attempted(3)</button>
            </div>

            <button className='Unattempted37'>Unattempted(37)</button>

        </div>
    );
};

export default Filter;


