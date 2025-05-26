"use client";
import React, { useState } from "react";
import "./Filter.css";

const Filter = ({
    allQuestions,
    setQuestions,
    setCurrentPage,
    attemptedCount,
    unattemptedCount,
}) => {
    const [activeScoreButton, setActiveScoreButton] = useState("All");
    const [activeAttemptedButton, setActiveAttemptedButton] = useState("All");

    const getDifficulty = (score) => {
        if (score === "All") return "All";
        if (score === 10) return "easy";
        if (score === 15) return "medium";
        if (score === 20) return "hard";
    };


    const applyCombinedFilter = (status, score) => {
        let filtered = [...allQuestions];

        if (status === "Attempted") {
            filtered = filtered.filter((q) => q.selectedOption);
        }
        else if (status === "Unattempted") {
            filtered = filtered.filter((q) => !q.selectedOption);
        }

        if (score !== "All") {
            const difficulty = getDifficulty(score);
            filtered = filtered.filter((q) => q.difficulty === difficulty);
        }

        setQuestions(filtered);
    };

    const handleFilter = (score) => {
        setCurrentPage(1);
        setActiveScoreButton(score);
        applyCombinedFilter(activeAttemptedButton, score);
    };

    const handleAttemptAllFilter = () => {
        setCurrentPage(1);
        setActiveAttemptedButton("All");
        applyCombinedFilter("All", activeScoreButton);
    };

    const handleAttemptedFilter = () => {
        setCurrentPage(1);
        setActiveAttemptedButton("Attempted");
        applyCombinedFilter("Attempted", activeScoreButton);
    };

    const handleUnattemptedFilter = () => {
        setCurrentPage(1);
        setActiveAttemptedButton("Unattempted");
        applyCombinedFilter("Unattempted", activeScoreButton);
    };

    return (
        <div className="filterMainDiv">
            <div className="filter">FILTERS</div>
            <p className="questionScore">Question Score</p>

            <div className="paginationfilterbox">
                <button
                    onClick={() => handleFilter("All")}
                    className={`scoreBtn ${activeScoreButton === "All" ? "activeButton" : ""}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilter(10)}
                    className={`scoreBtn ${activeScoreButton === 10 ? "activeButton" : ""}`}
                >
                    10
                </button>
                <button
                    onClick={() => handleFilter(15)}
                    className={`scoreBtn ${activeScoreButton === 15 ? "activeButton" : ""}`}
                >
                    15
                </button>
                <button
                    onClick={() => handleFilter(20)}
                    className={`scoreBtn ${activeScoreButton === 20 ? "activeButton" : ""}`}
                >
                    20
                </button>
            </div>

            <div>
                <p className="questionsattempted">Questions Attempted</p>
            </div>

            <div className="allattemtedDiv">
                <button
                    className={`questionAttempted ${activeAttemptedButton === "All" ? "activeButton" : ""}`}
                    onClick={handleAttemptAllFilter}
                >
                    All({allQuestions.length})
                </button>
                <button
                    className={`questionAttempted ${activeAttemptedButton === "Attempted" ? "activeButton" : ""}`}
                    onClick={handleAttemptedFilter}
                >
                    Attempted({attemptedCount})
                </button>
            </div>

            <button
                className={`Unattempted37 ${activeAttemptedButton === "Unattempted" ? "activeButton" : ""}`}
                onClick={handleUnattemptedFilter}
            >
                Unattempted({unattemptedCount})
            </button>
        </div>
    );
};

export default Filter;
