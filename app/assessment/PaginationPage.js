import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AssessmentHeader from '../assessment/AssessmentHeader';
const PaginationPage = () => {
    return (
        <>
            <div className='mainDivPagination'>
                <div className='mainDivPagination1'>
                    <AssessmentHeader/>
                    <div className='paginationMain'>
                        <div className="pagination">
                            <a href="#" className="prev"><ArrowBackIosIcon /></a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">7</a>
                            <a href="#">8</a>
                            <a href="#" className="next"><ArrowForwardIosIcon /></a>
                        </div>
                        <div className='submitDiv'>
                            <a className='submit' href='successfully'>Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaginationPage;