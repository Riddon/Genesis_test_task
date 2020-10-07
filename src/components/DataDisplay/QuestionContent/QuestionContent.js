import React from "react";
import propTypes from "prop-types";
import "./QuestionContent.css";
import QuestionTitle from "../QuestionTitle/QuestionTitle";
import AnswerList from "../AnswerList/AnswerList";

const QuestionContent = (props) => {

    const {currentQuestion, onClick, selectedAnswer, showCorrectAnswer, showWrongAnswer, hovered} = props;

    return (
        <div className="question-content">
            <QuestionTitle title={currentQuestion.question} />
            <AnswerList
                answerList={currentQuestion.answers}
                correctAnswer={currentQuestion.correctAnswer}
                onClick={onClick}
                selectedAnswer={selectedAnswer}
                showCorrectAnswer={showCorrectAnswer}
                showWrongAnswer={showWrongAnswer}
                hovered={hovered}
            />
        </div>
    );
};

QuestionContent.propTypes = {
    currentQuestion: propTypes.object,
    onClick: propTypes.func,
    selectedAnswer: propTypes.string,
    showCorrectAnswer: propTypes.bool,
    showWrongAnswer: propTypes.bool,
    hovered: propTypes.bool
};

export default QuestionContent;