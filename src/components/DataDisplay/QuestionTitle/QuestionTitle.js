import React from "react";
import propTypes from "prop-types";
import "./QuestionTitle.css";

const QuestionTitle = (props) => {

    const {title} = props;

    return (
        <p className="question-title">
            {title}
        </p>
    );
};

QuestionTitle.propTypes = {
    title: propTypes.string
};

export default QuestionTitle;