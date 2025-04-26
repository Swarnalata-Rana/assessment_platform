// import React from 'react';
// import './Filter.css';

// const Filter = () => {

//     return (
//         <>
//             <div className='filterMainDiv'>
//                 <div className='filter'>FILTERS</div>
//                 <p className='questionScore'>Question Score</p>
//                 <div class="paginationfilterbox">
//                     <a href="#">All</a>
//                     <a href="#">10</a>
//                     <a href="#">15</a>
//                     <a href="#">20</a>
//                 </div>
//                 <div>
//                     <p className='questionsattempted'>Questions Attempted</p>
//                 </div>
//                 <div className='allattemtedDiv'>
//                     <p className='all40'>All(40)</p>
//                     <p className='attemted3'>Attempted(3)</p>
//                 </div>
//                 <div className='Unattempted37'>Unattempted (37)</div>
//             </div>
//         </>
//     )
// }

// export default Filter;



import React from 'react';
import './Filter.css';

const Filter = ({ allQuestions, setQuestions, setCurrentPage }) => {
    // let difficulty = '';
    function handleFilter(score) {
        setCurrentPage(1);
        if (score === 'All') {
            setQuestions(allQuestions);
        }
        else {

            let difficulty = '';
            if (score === 10) {
                difficulty = 'easy';
            }
            else if (score === 15) {
                difficulty = 'medium';
            }
            else if (score === 20) {
                difficulty = 'hard';
            }

            const filteredQuestions = allQuestions.filter(question => question.difficulty === difficulty);

            setQuestions(filteredQuestions);
        }
    }


    return (
        <div className='filterMainDiv'>
            <div className='filter'>FILTERS</div>
            <p className='questionScore'>Question Score</p>

            <div className="paginationfilterbox">
                <button onClick={() => handleFilter('All')}>All</button>
                <button onClick={() => handleFilter(10)}>10</button>
                <button onClick={() => handleFilter(15)}>15</button>
                <button onClick={() => handleFilter(20)}>20</button>
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
    );
};

export default Filter;
