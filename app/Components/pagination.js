import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = () => {
    return (
        <>
            <div className='mainDivPagination'>
                <div className='mainDivPagination1'>
                    <div className='headerDivP2'>
                        <img className='logoImgP2' src='LogoGrp.png' />
                        <img className='QAdivP2' src='QA.png' />
                    </div>
                    <div className='paginationMain'>
                        <div class="pagination">
                            <a href="#" class="prev"><ArrowBackIosIcon /></a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">7</a>
                            <a href="#">8</a>
                            <a href="#" class="next"><ArrowForwardIosIcon /></a>
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
export default Pagination;