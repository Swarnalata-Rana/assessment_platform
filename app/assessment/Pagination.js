"use client"
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css'

const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {

    const handlePageClick = (pageNo) => {
        setCurrentPage(pageNo);
    };

    const handlePrev = () => {
        setCurrentPage(prev => {
            const newPage = Math.max(prev - 1, 1);
            return newPage;
        });
    };

    const handleNext = () => {
        setCurrentPage(next => {
            const newPage = Math.min(next + 1, 8);
            return newPage;
        });
    };

    return (
        <>
            <div className="pagination">
                <div className="prev" onClick={handlePrev}><ArrowBackIosIcon id="prevArrow" /></div>
                {totalPages > 0 && (<div className={`paginations ${currentPage === 1 ? 'active' : ''}`} onClick={() => handlePageClick(1)}>1</div>)}
                <div id="threedot"><p className='threedotP'>...</p></div>
                {totalPages > 1 && (<div className={`paginations ${currentPage === 2 ? 'active' : ''}`} onClick={() => handlePageClick(2)}>2</div>)}
                {totalPages > 2 && (<div className={`paginations ${currentPage === 3 ? 'active' : ''}`} onClick={() => handlePageClick(3)}>3</div>)}
                {totalPages > 3 && (<div className={`paginations ${currentPage === 4 ? 'active' : ''}`} onClick={() => handlePageClick(4)}>4</div>)}
                {totalPages > 4 && (<div className={`paginations ${currentPage === 5 ? 'active' : ''}`} onClick={() => handlePageClick(5)}>5</div>)}
                <div id="threedot"><p className='threedotP'>...</p></div>
                {totalPages > 5 && (<div className={`paginations ${currentPage === 6 ? 'active' : ''}`} onClick={() => handlePageClick(6)}>6</div>)}
                {totalPages > 6 && (<div className={`paginations ${currentPage === 7 ? 'active' : ''}`} onClick={() => handlePageClick(7)}>7</div>)}
                {totalPages > 7 && (<div className={`paginations ${currentPage === 8 ? 'active' : ''}`} onClick={() => handlePageClick(8)}>8</div>)}
                <div className="next" onClick={handleNext}><ArrowForwardIosIcon /></div>
            </div>
        </>
    )
}
export default Pagination;



