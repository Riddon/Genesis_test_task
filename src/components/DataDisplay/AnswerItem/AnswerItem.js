import React from "react";
import "./AnswerItem.css";

const AnswerItem = (props) => {

    const {answer, onClick, numberList, selectedAnswer, showRightAnswer, correctAnswer, showWrongAnswer} = props;

    const handlerClick = () => {
        onClick(answer);
    };

    return (
        <li className="answer-list-item">
            <div
                className={`answer-list-item-line
                ${answer === selectedAnswer ? "answer-list-item-line--selected" : " "}
                ${(showRightAnswer && answer === correctAnswer) ? "answer-list-item-line--correct" : " "}
                ${(showWrongAnswer && answer === selectedAnswer && selectedAnswer !== correctAnswer) ? "answer-list-item-line--wrong" : " "}`}>
            </div>
            <div
                className={`answer-list-item-content
                ${answer === selectedAnswer ? "answer-list-item-content--selected" : " "}
                ${(showRightAnswer && answer === correctAnswer) ? "answer-list-item-content--correct" : " "}
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

export default AnswerItem;