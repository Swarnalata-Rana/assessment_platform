"use client"
import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {

    return (
        <div className='filterMainDiv'>
            <div className='filter'>FILTERS</div>
            <p className='questionScore'>Question Score</p>

            <div className="paginationfilterbox">
                <button >All</button>
                <button >10</button>
                <button >15</button>
                <button >20</button>
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
