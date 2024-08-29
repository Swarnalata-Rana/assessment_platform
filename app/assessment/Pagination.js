import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css'

const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="prev"><ArrowBackIosIcon id="prevArrow" /></div>
                <div className='paginations'>1</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div className='paginations'>2</div>
                <div className='paginations'>3</div>
                <div className='paginations'>4</div>
                <div className='paginations'>5</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div className='paginations'>6</div>
                <div className='paginations'>7</div>
                <div className='paginations'>8</div>
                <div className="next"><ArrowForwardIosIcon /></div>
            </div>
        </>
    )
}
export default Pagination;