// import React from 'react'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import './Pagination.css'

// const Pagination = () => {
//     return (
//         <>
//             <div className='paginationComponent'>
//                 <div className="pagination">
//                     <div className="prev"><ArrowBackIosIcon id="prevArrow" /></div>
//                     <div className='paginations'>1</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className='paginations'>2</div>
//                     <div className='paginations'>3</div>
//                     <div className='paginations'>4</div>
//                     <div className='paginations'>5</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className='paginations'>6</div>
//                     <div className='paginations'>7</div>
//                     <div className='paginations'>8</div>
//                     <div className="next"><ArrowForwardIosIcon /></div>
//                 </div>
//             </div >
//         </>
//     )
// }
// export default Pagination;

import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css';

const Pagination = ({ setCurrentPage }) => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='paginationComponent'>
            <div className="pagination">
                <div className="prev" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                    <ArrowBackIosIcon id="prevArrow" />
                </div>

                {pages.map(page => (
                    <div key={page} className='paginations' onClick={() => setCurrentPage(page)}>
                        {page}
                    </div>
                ))}

                <div className="next" onClick={() => setCurrentPage(next => Math.min(next + 1, 8))}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
};

export default Pagination;
