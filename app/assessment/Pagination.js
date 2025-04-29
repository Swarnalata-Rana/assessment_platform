// import React from 'react'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import './Pagination.css'

// const Pagination = ({ setCurrentPage }) => {
//     return (
//         <>
//             <div className='paginationComponent'>
//                 <div className="pagination">
//                     <div className="prev" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
//                         <ArrowBackIosIcon id="prevArrow" />
//                     </div>
//                     <div className='paginations' onClick={() => setCurrentPage(1)}>1</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className='paginations' onClick={() => setCurrentPage(2)}>2</div>
//                     <div className='paginations' onClick={() => setCurrentPage(3)}>3</div>
//                     <div className='paginations' onClick={() => setCurrentPage(4)}>4</div>
//                     <div className='paginations' onClick={() => setCurrentPage(5)}>5</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className='paginations' onClick={() => setCurrentPage(6)}>6</div>
//                     <div className='paginations' onClick={() => setCurrentPage(7)}>7</div>
//                     <div className='paginations' onClick={() => setCurrentPage(8)}>8</div>
//                     <div className="next" onClick={() => setCurrentPage(next => Math.min(next + 1, 8))}>
//                         <ArrowForwardIosIcon />
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }
// export default Pagination;


// "use client"
// import React from 'react'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import './Pagination.css'

// const Pagination = ({ setCurrentPage }) => {
//     const [activePage, setActivePage] = useState(1); // Track selected page

//     const handlePageClick = (page) => {
//         setCurrentPage(page);
//         setActivePage(page); // Set active page
//     };
//     return (
//         <>
//             <div className='paginationComponent'>
//                 <div className="pagination">
//                     <div className="prev" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
//                         <ArrowBackIosIcon id="prevArrow" />
//                     </div>
//                     <div className={`paginations ${activePage === 1 ? 'active' : ''}`} onClick={() => handlePageClick(1)}>1</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className={`paginations ${activePage === 2 ? 'active' : ''}`} onClick={() => handlePageClick(2)}>2</div>
//                     <div className={`paginations ${activePage === 3 ? 'active' : ''}`} onClick={() => handlePageClick(3)}>3</div>
//                     <div className={`paginations ${activePage === 4 ? 'active' : ''}`} onClick={() => handlePageClick(4)}>4</div>
//                     <div className={`paginations ${activePage === 5 ? 'active' : ''}`} onClick={() => handlePageClick(5)}>5</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className={`paginations ${activePage === 6 ? 'active' : ''}`} onClick={() => handlePageClick(6)}>6</div>
//                     <div className={`paginations ${activePage === 7 ? 'active' : ''}`} onClick={() => handlePageClick(7)}>7</div>
//                     <div className={`paginations ${activePage === 8 ? 'active' : ''}`} onClick={() => handlePageClick(8)}>8</div>

//                     <div className="next" onClick={() => setCurrentPage(next => Math.min(next + 1, 8))}>
//                         <ArrowForwardIosIcon />
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }
// export default Pagination;




// "use client"
// import React, { useState } from 'react';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import './Pagination.css';

// const Pagination = ({ setCurrentPage,activePage,setActivePage }) => {

//     const handlePageClick = (page) => {
//         setCurrentPage(page);
//         setActivePage(page)
//     };

//     const handlePrev = () => {
//         setCurrentPage(prev => {
//             const newPage = Math.max(prev - 1, 1);
//             setActivePage(newPage);
//             return newPage;
//         });
//     };

//     const handleNext = () => {
//         setCurrentPage(prev => {
//             const newPage = Math.min(prev + 1, 8);
//             setActivePage(newPage);
//             return newPage;
//         });
//     };


//     return (
//         <>
//             <div className='paginationComponent'>
//                 <div className="pagination">
//                     <div className="prev" onClick={handlePrev}>
//                         <ArrowBackIosIcon id="prevArrow" />
//                     </div>

//                     <div className={`paginations ${activePage === 1 ? 'active' : ''}`} onClick={() => handlePageClick(1)}>1</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className={`paginations ${activePage === 2 ? 'active' : ''}`} onClick={() => handlePageClick(2)}>2</div>
//                     <div className={`paginations ${activePage === 3 ? 'active' : ''}`} onClick={() => handlePageClick(3)}>3</div>
//                     <div className={`paginations ${activePage === 4 ? 'active' : ''}`} onClick={() => handlePageClick(4)}>4</div>
//                     <div className={`paginations ${activePage === 5 ? 'active' : ''}`} onClick={() => handlePageClick(5)}>5</div>
//                     <div id="threedot"><p className='threedotP'>...</p></div>
//                     <div className={`paginations ${activePage === 6 ? 'active' : ''}`} onClick={() => handlePageClick(6)}>6</div>
//                     <div className={`paginations ${activePage === 7 ? 'active' : ''}`} onClick={() => handlePageClick(7)}>7</div>
//                     <div className={`paginations ${activePage === 8 ? 'active' : ''}`} onClick={() => handlePageClick(8)}>8</div>

//                     <div className="next" onClick={handleNext}>
//                         <ArrowForwardIosIcon />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Pagination;


"use client"
import React, {useState}from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Pagination.css'
// import { useState } from 'react'

const Pagination = ({ setCurrentPage }) => {
    const [activePage, setActivePage] = useState(1);//work for bg color


    const handlePageClick = (page) => {
        setCurrentPage(page);
        setActivePage(page)
    };

    const handlePrev = () => {
        setCurrentPage(prev => {
            const newPage = Math.max(prev - 1, 1);
            setActivePage(newPage);
            return newPage;
        });
    };

    const handleNext = () => {
        setCurrentPage(prev => {
            const newPage = Math.min(prev + 1, 8);
            setActivePage(newPage);
            return newPage;
        });
    };
    return (
        <>
            <div className="pagination">
                <div className="prev" onClick={handlePrev}><ArrowBackIosIcon id="prevArrow" /></div>
                <div className={`paginations ${activePage === 1 ? 'active' : ''}`} onClick={() => handlePageClick(1)}>1</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div className={`paginations ${activePage === 2 ? 'active' : ''}`} onClick={() => handlePageClick(2)}>2</div>
                <div className={`paginations ${activePage === 3 ? 'active' : ''}`} onClick={() => handlePageClick(3)}>3</div>
                <div className={`paginations ${activePage === 4 ? 'active' : ''}`} onClick={() => handlePageClick(4)}>4</div>
                <div className={`paginations ${activePage === 5 ? 'active' : ''}`} onClick={() => handlePageClick(5)}>5</div>
                <div id="threedot"><p className='threedotP'>...</p></div>
                <div className={`paginations ${activePage === 6 ? 'active' : ''}`} onClick={() => handlePageClick(6)}>6</div>
                <div className={`paginations ${activePage === 7 ? 'active' : ''}`} onClick={() => handlePageClick(7)}>7</div>
                <div className={`paginations ${activePage === 8 ? 'active' : ''}`} onClick={() => handlePageClick(8)}>8</div>
                <div className="next" onClick={handleNext}><ArrowForwardIosIcon /></div>
            </div>
        </>
    )
}
export default Pagination;