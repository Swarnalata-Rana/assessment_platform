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

    function getDifficulty(score) {
        if (score === 10) {
            return "easy";
        }
        if (score === 15) {
            return "medium";
        }
        if (score === 20) {
            return "hard";
        }
    }

    function combineBothFilter(status, score) {
        let filtered = allQuestions;

        if (status === "Attempted") {
            filtered = filtered.filter(function (question) {
                return question.selectedOption;
            });
        }
        if (status === "Unattempted") {
            filtered = filtered.filter(function (question) {
                return !question.selectedOption;
            });
        }

        if (score !== "All") {
            const difficulty = getDifficulty(score);
            filtered = filtered.filter(function (question) {
                return question.difficulty === difficulty;
            });
        }
        setQuestions(filtered);
    }

    function handleScoreFilter(score) {
        setCurrentPage(1);
        setActiveScoreButton(score);
        combineBothFilter(activeAttemptedButton, score);
    }

    function handleAttemptFilter(status) {
        setCurrentPage(1);
        setActiveAttemptedButton(status);
        combineBothFilter(status, activeScoreButton);
    }

    return (
        <div className="filterMainDiv">
            <div className="filter">FILTERS</div>
            <p className="questionScore">Question Score</p>

            <div className="paginationfilterbox">
                <button
                    onClick={() => handleScoreFilter("All")}
                    className={`scoreBtn ${activeScoreButton === "All" ? "activeButton" : ""}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleScoreFilter(10)}
                    className={`scoreBtn ${activeScoreButton === 10 ? "activeButton" : ""}`}
                >
                    10
                </button>
                <button
                    onClick={() => handleScoreFilter(15)}
                    className={`scoreBtn ${activeScoreButton === 15 ? "activeButton" : ""}`}
                >
                    15
                </button>
                <button
                    onClick={() => handleScoreFilter(20)}
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
                    onClick={() => handleAttemptFilter("All")}
                >
                    All({allQuestions.length})
                </button>

                <button
                    className={`questionAttempted ${activeAttemptedButton === "Attempted" ? "activeButton" : ""}`}
                    onClick={() => handleAttemptFilter("Attempted")}
                >
                    Attempted({attemptedCount})
                </button>

            </div>

            <button
                className={`Unattempted37 ${activeAttemptedButton === "Unattempted" ? "activeButton" : ""}`}
                onClick={() => handleAttemptFilter("Unattempted")}
            >
                Unattempted({unattemptedCount})
            </button>
        </div>
    );
};

export default Filter;
