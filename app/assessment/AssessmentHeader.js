import React from 'react';
import './AssessmentHeader.css';
import Pagination from './Pagination';

const AssessmentHeader = ({setCurrentPage}) => {
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
                    <Pagination  setCurrentPage={setCurrentPage}/>
                </div>
                <div className='sumbitComponent'>
                    <div className='submitDiv'>
                        <a className='submit' href='successfully'>Submit</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssessmentHeader;
