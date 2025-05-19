import React from 'react';
import './AssessmentHeader.css';
import Pagination from './Pagination';
import Submit from './Submit';

const AssessmentHeader = ({setCurrentPage,totalPages,currentPage,onSubmit}) => {
    return (
        <>
            <div className='paginationAssesmentHeaderComponet '>
                <div className='paginationAssesmentComponet1'>
                    <div className='assessmentHeader'>
                        <div className='headerDiv'>
                            <div className='headerDiv1'>
                                <img className='logoImg' src='LogoGrp.png' />
                                <p className='QAdiv' >QA</p>
                            </div>
                        </div>
                    </div>
                    <Pagination  setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
                </div>
                <Submit onSubmit={onSubmit}/>
            </div>
        </>
    )
}

export default AssessmentHeader;
