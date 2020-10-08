import React from "react";
import propTypes from "prop-types";
import "./AnswerItem.css";

const AnswerItem = (props) => {

    const {answer, onClick, numberList, selectedAnswer, showCorrectAnswer, correctAnswer, showWrongAnswer, hovered} = props;

    const handlerClick = () => {
        onClick(answer);
    };

    const handlerHover = (e) => {
        if(e.target.classList.contains("answer-list-item-content")) {
            e.target.classList.add('answer-list-item-content--hover');
            e.target.previousSibling.classList.add('answer-list-item-line--hover');
        }
    };

    const handlerHoverOut = (e) => {
        if(e.target.classList.contains("answer-list-item-content")) {
            e.target.classList.remove('answer-list-item-content--hover');
            e.target.previousSibling.classList.remove('answer-list-item-line--hover');
        }
    };

    return (
        <li
            className="answer-list-item"
            onMouseOver={hovered ? handlerHover : ()=>{}}
            onMouseOut={hovered ? handlerHoverOut : ()=>{}}
        >
            <div
                className={`answer-list-item-line
                ${answer === selectedAnswer ? "answer-list-item-line--selected" : " "}
                ${(showCorrectAnswer && answer === correctAnswer) ? "answer-list-item-line--correct" : " "}
                ${(showWrongAnswer && answer === selectedAnswer && selectedAnswer !== correctAnswer) ? "answer-list-item-line--wrong" : " "}`}>
            </div>
            <div
                className={`answer-list-item-content
                ${answer === selectedAnswer ? "answer-list-item-content--selected" : " "}
                ${(showCorrectAnswer && answer === correctAnswer) ? "answer-list-item-content--correct" : " "}
                ${(showWrongAnswer && answer === selectedAnswer && selectedAnswer !== correctAnswer) ? "answer-list-item-content--wrong" : " "}`}
                onClick={handlerClick}
            >
                <span className="answer-list-item-number">
                    {numberList}
                </span>
                <span>
                    {answer}
                </span>
            </div>
        </li>
    );
};

AnswerItem.propTypes = {
    answer: propTypes.string,
    onClick: propTypes.func,
    numberList: propTypes.string,
    selectedAnswer: propTypes.string,
    showCorrectAnswer: propTypes.bool,
    correctAnswer: propTypes.string,
    showWrongAnswer: propTypes.bool,
    hovered: propTypes.bool
};

export default AnswerItem;