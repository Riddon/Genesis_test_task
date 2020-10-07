import React, {useState, useEffect} from "react";
import "./AnswerList.css";
import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = (props) => {

    const {answerList, correctAnswer, onClick, selectedAnswer, showCorrectAnswer, showWrongAnswer} = props;
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
                showRightAnswer={showCorrectAnswer}
                showWrongAnswer={showWrongAnswer}
                correctAnswer={correctAnswer}
            />
        );
    }

    return (
        <ul className={`answer-list`}>
            {list}
        </ul>
    );
};

export default AnswerList;