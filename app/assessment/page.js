import React from 'react'
import './Assessment.css';
import Pagination from './Pagination';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
import AssessmentHeader from './AssessmentHeader';
import Submit from './Submit';

const page = () => {
    return (
        <>
            <div className='mainPage'>
                <div className='paginationAssesmentHeaderComponet '>
                    <div className='paginationAssesmentComponet1'>
                        <div className='assessmentComponent'>
                            {/* <AssessmentHeader /> */}
                        </div>
                        <div className='paginationComponent'>
                            {/* <Pagination /> */}
                        </div>
                    </div>
                    {/* <Submit /> */}
                </div>
                <div className='mainwidthBgcolor'>
                    <div className='secondPageMainDiv'>
                        <div className='secondPageMainDiv1'>
                            <div className='medeaQuerryTimerFilterComponent'>
                                {/* <Timer />
                                <Filter /> */}
                            </div>
                            <div className='mainQuestionDiv'>
                                <Question />
                                <Question />
                                <Question />
                            </div>
                        </div>
                        <div className='gapDiv'></div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default page;
