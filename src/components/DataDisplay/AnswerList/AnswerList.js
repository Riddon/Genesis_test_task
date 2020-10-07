import React from "react";
import propTypes from "prop-types";
import "./AnswerList.css";
import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = (props) => {

    const {answerList, correctAnswer, onClick, selectedAnswer, showCorrectAnswer, showWrongAnswer, hovered} = props;
    let list = null;
    let numberList = ["A", "B", "C", "D"];

    if (answerList) {

        list = answerList.map((item, i) =>
            <AnswerItem
                key={i}
                answer={item}
                onClick={!selectedAnswer ? onClick : ()=>{}}
                numberList={numberList[i]}
                selectedAnswer={selectedAnswer}
                showCorrectAnswer={showCorrectAnswer}
                showWrongAnswer={showWrongAnswer}
                correctAnswer={correctAnswer}
                hovered={hovered}
            />
        );
    }

    return (
        <ul className={`answer-list`}>
            {list}
        </ul>
    );
};

AnswerList.propTypes = {
    answerList: propTypes.array,
    correctAnswer: propTypes.string,
    onClick: propTypes.func,
    selectedAnswer: propTypes.string,
    showCorrectAnswer: propTypes.bool,
    showWrongAnswer: propTypes.bool,
    hovered: propTypes.bool
};

export default AnswerList;