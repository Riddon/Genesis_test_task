import React from "react";
import propTypes from "prop-types";
import "./EarnedList.css";


const EarnedList = (props) => {

    const {openMenu, questionList, currentQuestion} = props;

    questionList.sort((a,b) => b.id - a.id);

    const list = questionList.map(item =>
            <li key={item.id} className="earner-list-item">
                <div
                    className={`earner-list-item-line
                    ${(item.id === currentQuestion) ? "earner-list-item-line--current" : ""}`}>
                </div>
                <span
                    className={`earner-list-item-content
                    ${(item.id === currentQuestion) ? "earner-list-item-content--current" : ""}
                    ${(item.id < currentQuestion) ? "earner-list-item-content--earned" : ""}`}>
                {`$${item.money}`}
                </span>
            </li>
        );

    return (
        <nav className={`earner-nav ${openMenu ? "earner-nav-open" : "earner-nav-close"}`}>
            <ul className="earner-list">
                {list}
            </ul>
        </nav>
    );
};

EarnedList.propTypes = {
    openMenu: propTypes.bool,
    questionList: propTypes.array,
    currentQuestion: propTypes.number
};

export default EarnedList;