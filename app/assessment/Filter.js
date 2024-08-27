import React from 'react'
import './Filter.css'
const Filter = () => {
    return (
        <>
            <div className='filterMainDiv'>
                <div className='filter'>FILTERS</div>
                <p className='questionScore'>Question Score</p>
                <div class="paginationfilterbox">
                    <a href="#">All</a>
                    <a href="#">10</a>
                    <a href="#">15</a>
                    <a href="#">20</a>
                </div>
                <div>
                    <p className='questionsattempted'>Questions Attempted</p>

                </div>
                <div className='allattemtedDiv'>
                    <p className='all40'>All(40)</p>
                    <p className='attemted3'>Attempted(3)</p>
                </div>
                <div className='Unattempted37'>Unattempted (37)</div>
            </div>
            <div className='filterMobileview'>FILTERS</div>
        </>
    )
}

export default Filter
