import React from 'react'
import './Assessment.css';
import PaginationPage from './PaginationPage';
import Filter from './Filter';
import Question from './Question';
import Timer from './Timer';
const page = () => {
    return (
        <>
            <div className=''>
                <div className=''>
                    <PaginationPage />
                </div>
                <div className='mainwidthBgcolor'>
                    <div className='secondPageMainDiv'>
                        <div className='secondPageMainDiv1'>
                            <div>
                                <Timer />
                                <Filter />
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
