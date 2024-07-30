import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = () => {
    return (
        <>
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
                    <a className='submit' href=''>Submit</a>
                </div>
            </div>
        </>
    )
}
export default Pagination;