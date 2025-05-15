// "use client"
// import React, { useState } from 'react';
// import './Filter.css';

// const Filter = ({ allQuestions, setQuestions, setCurrentPage, setActivePage, attemptedCount, attemptedQuestions }) => {
//     const [activeButton, setActiveButton] = useState('All');
//     const unattemptedCount = allQuestions.length - attemptedCount;


//     function handleFilter(score) {
//         setCurrentPage(1);
//         setActivePage(1);
//         setActiveButton(score)
//         if (score === 'All') {
//             setQuestions(allQuestions);
//         }
//         else {

//             let difficulty = '';
//             if (score === 10) {
//                 difficulty = 'easy';
//             }
//             else if (score === 15) {
//                 difficulty = 'medium';
//             }
//             else if (score === 20) {
//                 difficulty = 'hard';
//             }

//             const filteredQuestions = allQuestions.filter(question => question.difficulty === difficulty);

//             setQuestions(filteredQuestions);
//         }
//     }



//     // function handleAttempteAll() {
//     //     setCurrentPage(1);
//     //     setActivePage(1)
//     //     setActiveButton('AttemptedAll')
//     //     const filtered = allQuestions.filter(q => attemptedQuestions.includes(q.id));
//     //     setQuestions(filtered);
//     // }

//     function handleAttemptedFilter() {
//         setCurrentPage(1);
//         setActivePage(1)
//         setActiveButton('Attempted')
//         const filtered = allQuestions.filter(q => attemptedQuestions.includes(q.id));
//         setQuestions(filtered);
//     }

//     function handleUnattemptedFilter() {
//         setCurrentPage(1);
//         setActivePage(1)
//         setActiveButton('Unattempted')
//         const filtered = allQuestions.filter(q => !attemptedQuestions.includes(q.id));
//         setQuestions(filtered);
//     }

//     return (
//         <div className='filterMainDiv'>
//             <div className='filter'>FILTERS</div>
//             <p className='questionScore'>Question Score</p>

//             <div className="paginationfilterbox">
//                 <button onClick={() => handleFilter('All')} >All</button>
//                 <button onClick={() => handleFilter(10)}>10</button>
//                 <button onClick={() => handleFilter(15)}>15</button>
//                 <button onClick={() => handleFilter(20)}>20</button>
//             </div>

//             <div>
//                 <p className='questionsattempted'>Questions Attempted</p>
//             </div>

//             <div className='allattemtedDiv'>
//                 <button
//                     className={`all40 ${activeButton === 'All' ? 'activeButton' : ''}`}
//                     onClick={() => handleFilter('All')}
//                 >
//                     All({allQuestions.length})
//                 </button>
//                 <button
//                     className={`attemted3 ${activeButton === 'Attempted' ? 'activeButton' : ''}`}
//                     onClick={handleAttemptedFilter}
//                 >
//                     Attempted({attemptedCount})
//                 </button>
//             </div>

//             <button
//                 className={`Unattempted37 ${activeButton === 'Unattempted' ? 'activeButton' : ''}`}
//                 onClick={handleUnattemptedFilter}
//             >
//                 Unattempted({unattemptedCount})
//             </button>
//         </div>
//     );
// };

// export default Filter;



"use client";
import React, { useState } from "react";
import "./Filter.css";

const Filter = ({
    allQuestions,
    setQuestions,
    setCurrentPage,
    setActivePage,
    attemptedCount,
    attemptedQuestions,
    unattemptedCount
}) => {
    const [activeScoreButton, setActiveScoreButton] = useState("All");
    const [activeAttemptedButton, setActiveAttemptedButton] = useState("");
    // const unattemptedCount = allQuestions.length - attemptedCount;

    function handleFilter(score) {
        setCurrentPage(1);
        setActivePage(1);
        setActiveScoreButton(score);
        // setActiveAttemptedButton("All"); // reset attempted filter

        if (score === "All") {
            setQuestions(allQuestions);
        } else {
            let difficulty = "";
            if (score === 10) difficulty = "easy";
            else if (score === 15) difficulty = "medium";
            else if (score === 20) difficulty = "hard";

            const filteredQuestions = allQuestions.filter(
                (q) => q.difficulty === difficulty
            );
            setQuestions(filteredQuestions);
        }
    }

    function handleAttemptedFilter() {
        setCurrentPage(1);
        setActivePage(1);
        setActiveAttemptedButton("Attempted");
        // setActiveScoreButton(""); // reset score filter

        const filtered = allQuestions.filter((q) =>
            attemptedQuestions.includes(q.id)
        );
        setQuestions(filtered);
    }

    function handleUnattemptedFilter() {
        setCurrentPage(1);
        setActivePage(1);
        setActiveAttemptedButton("Unattempted");
        // setActiveScoreButton(""); // reset score filter

        const filtered = allQuestions.filter(
            (q) => !attemptedQuestions.includes(q.id)
        );
        setQuestions(filtered);
    }

    return (
        <div className="filterMainDiv">
            <div className="filter">FILTERS</div>
            <p className="questionScore">Question Score</p>

            <div className="paginationfilterbox">
                <button
                    className={activeScoreButton === "All" ? "activeButton" : ""}
                    onClick={() => handleFilter("All")}
                >
                    All
                </button>
                <button
                    className={activeScoreButton === 10 ? "activeButton" : ""}
                    onClick={() => handleFilter(10)}
                >
                    10
                </button>
                <button
                    className={activeScoreButton === 15 ? "activeButton" : ""}
                    onClick={() => handleFilter(15)}
                >
                    15
                </button>
                <button
                    className={activeScoreButton === 20 ? "activeButton" : ""}
                    onClick={() => handleFilter(20)}
                >
                    20
                </button>
            </div>

            <div>
                <p className="questionsattempted">Questions Attempted</p>
            </div>

            <div className="allattemtedDiv">
                <button
                    className={`all40 ${activeAttemptedButton === "" ? "activeButton" : ""}`}
                    onClick={() => handleFilter("All")}
                >
                    All({allQuestions.length})
                </button>
                <button
                    className={`attemted3 ${activeAttemptedButton === "Attempted" ? "activeButton" : ""
                        }`}
                    onClick={handleAttemptedFilter}
                >
                    Attempted({attemptedCount})
                </button>
            </div>

            <button
                className={`Unattempted37 ${activeAttemptedButton === "Unattempted" ? "activeButton" : ""
                    }`}
                onClick={handleUnattemptedFilter}
            >
                Unattempted({unattemptedCount})
            </button>
        </div>
    );
};

export default Filter;
