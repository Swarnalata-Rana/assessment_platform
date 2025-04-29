// import React from 'react';
// import './AssessmentHeader.css';
// import Pagination from './Pagination';
// const AssessmentHeader = () => {
//     return (
//         <>
//             <div className='paginationAssesmentHeaderComponet '>
//                 <div className='paginationAssesmentComponet1'>
//                     <div className='assessmentHeader'>
//                         <div className='headerDiv'>
//                             <div className='headerDiv1'>
//                                 <img className='logoImg' src='LogoGrp.png' />
//                                 <p className='QAdiv' >QA</p>
//                             </div>
//                         </div>
//                     </div>
//                     <Pagination/>
//                 </div>
//                 <div className='sumbitComponent'>
//                     <div className='submitDiv'>
//                         <a className='submit' href='successfully'>Submit</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AssessmentHeader;

import React from 'react';
import './AssessmentHeader.css';
import Pagination from './Pagination';

const AssessmentHeader = ({ setCurrentPage, activePage, setActivePage  }) => {
    return (
        <>
            <div className='paginationAssesmentHeaderComponet'>
                <div className='paginationAssesmentComponet1'>
                    <div className='assessmentHeader'>
                        <div className='headerDiv'>
                            <div className='headerDiv1'>
                                <img className='logoImg' src='LogoGrp.png' />
                                <p className='QAdiv'>QA</p>
                            </div>
                        </div>
                    </div>
                    <Pagination setCurrentPage={setCurrentPage} activePage={activePage} setActivePage={setActivePage} />
                </div>
                <div className='sumbitComponent'>
                    <div className='submitDiv'>
                        <a className='submit' href='successfully'>Submit</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssessmentHeader;
