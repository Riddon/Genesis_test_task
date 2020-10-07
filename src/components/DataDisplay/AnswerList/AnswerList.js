import React, {useState, useEffect} from "react";
import "./AnswerList.css";
import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = (props) => {

    const {answerList, correctAnswer, onClick} = props;
    let list = null;
    let numberList = ["A", "B", "C", "D"];
    let [selectedAnswer, setSelectedAnswer] = useState("");
    let [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    let [showWrongAnswer, setShowWrongAnswer] = useState(false);
    let timeoutCorrectAnswer;
    let timeoutWrongAnswer;
    console.log('Selected --->', selectedAnswer);

    useEffect(()=>{
        clearTimeout(timeoutCorrectAnswer);
        clearTimeout(timeoutWrongAnswer);
    });

    const checkAnswer = (data) => {
        setSelectedAnswer(data);

        timeoutCorrectAnswer = setTimeout(()=>{
            setShowCorrectAnswer(true);
        }, 2000);

        timeoutWrongAnswer = setTimeout(()=>{
            setShowWrongAnswer(true);
        }, 2000);

        onClick(data);
    };

    if (showCorrectAnswer) {
        timeoutCorrectAnswer = setTimeout(()=>{
            setShowCorrectAnswer(false);
        }, 1000);
    }

    if (showWrongAnswer) {
        timeoutWrongAnswer = setTimeout(()=>{
            setShowWrongAnswer(false);
        }, 1000);
    }

    if (answerList) {

        list = answerList.map((item, i) =>
            <AnswerItem
                key={i}
                answer={item}
                onClick={!selectedAnswer ? checkAnswer : ()=>{}}
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