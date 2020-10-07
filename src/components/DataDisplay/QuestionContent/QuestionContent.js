import React from "react";
import "./QuestionContent.css";
import QuestionTitle from "../QuestionTitle/QuestionTitle";
import AnswerList from "../AnswerList/AnswerList";

const QuestionContent = (props) => {

    const {currentQuestion, onClick} = props;

    return (
        <div className="question-content">
            <QuestionTitle title={currentQuestion.question} />
            <AnswerList
                answerList={currentQuestion.answers}
                correctAnswer={currentQuestion.correctAnswer}
                onClick={onClick}
            />
        </div>
    );
};

export default QuestionContent;