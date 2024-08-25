import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pegination.css'
const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <a href="#" className="prev">
                    <div className='prevArrow'><ArrowBackIosIcon /></div>
                </a>
                <a className='pagination1' href="#">1</a>
                <a className='pagination2' href="#">2</a>
                <a className='pagination3' href="#">3</a>
                <a className='pagination4' href="#">4</a>
                <a className='pagination5' href="#">5</a>
                <a className='pagination6' href="#">6</a>
                <a className='pagination7' href="#">7</a>
                <a className='pagination8' href="#">8</a>
                <a href="#" className="next"><ArrowForwardIosIcon /></a>
            </div>
        </>
    )
}
export default Pagination;