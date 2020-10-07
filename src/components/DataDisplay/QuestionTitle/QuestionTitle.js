import React from "react";
import "./QuestionTitle.css";

const QuestionTitle = (props) => {

    const {title} = props;

    return (
        <p className="question-title">
            {title}
        </p>
    );
};

export default QuestionTitle;