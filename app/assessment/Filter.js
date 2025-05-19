"use client";
import React, { useState } from "react";
import "./Filter.css";

const Filter = ({
    allQuestions,
    setQuestions,
    setCurrentPage,
    attemptedCount,
    attemptedQuestions,
    unattemptedCount
}) => {
    const [activeScoreButton, setActiveScoreButton] = useState("All");
    const [activeAttemptedButton, setActiveAttemptedButton] = useState("All");

    function handleFilter(score) {
        setCurrentPage(1);
        setActiveScoreButton(score);

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
        setActiveAttemptedButton("Attempted");

        const filtered = allQuestions.filter((q) =>
            attemptedQuestions.includes(q.id)
        );
        setQuestions(filtered);
    }

    function handleUnattemptedFilter() {
        setCurrentPage(1);
        setActiveAttemptedButton("Unattempted");

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
                    onClick={() => handleFilter('All')}
                    className={`scoreBtn ${activeScoreButton === 'All' ? 'activeButton' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilter(10)}
                    className={`scoreBtn ${activeScoreButton === 10 ? 'activeButton' : ''}`}
                >
                    10
                </button>
                <button
                    onClick={() => handleFilter(15)}
                    className={`scoreBtn ${activeScoreButton === 15 ? 'activeButton' : ''}`}
                >
                    15
                </button>
                <button
                    onClick={() => handleFilter(20)}
                    className={`scoreBtn ${activeScoreButton === 20 ? 'activeButton' : ''}`}
                >
                    20
                </button>
            </div>

            <div>
                <p className="questionsattempted">Questions Attempted</p>
            </div>

            <div className="allattemtedDiv">
                <button
                    className={`questionAtm ${activeAttemptedButton === 'All' ? "activeButton" : ""}`}
                    onClick={() => handleFilter("All")}
                >
                    All({allQuestions.length})
                </button>
                <button
                    className={`questionAtm ${activeAttemptedButton === "Attempted" ? "activeButton" : ""
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
