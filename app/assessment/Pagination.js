import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css'

const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="prev"><ArrowBackIosIcon id="prevArrow" /></div>
                <div id="paginations" className='pagination1'>1</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div id="paginations" className='pagination2'>2</div>
                <div id="paginations" className='pagination3'>3</div>
                <div id="paginations" className='pagination4'>4</div>
                <div id="paginations" className='pagination5'>5</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div id="paginations" className='pagination6'>6</div>
                <div id="paginations" className='pagination7'>7</div>
                <div id="paginations" className='pagination8'>8</div>
                <div className="next"><ArrowForwardIosIcon /></div>
            </div>
        </>
    )
}
export default Pagination;