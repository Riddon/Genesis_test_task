import React from "react";
import "./Hamburger.css";
import propTypes from "prop-types";

const Hamburger = (props) => {

    const {openMenu, onClick} = props;

    return (
        <div className="hamburger" onClick={onClick}>
            {openMenu
                ?
                <i className="fas fa-times hamburger-icon">
                </i>
                :
                <i className="fas fa-bars hamburger-icon">
                </i>
            }
        </div>
    );
};

Hamburger.propTypes = {
    openMenu: propTypes.bool,
    onClick: propTypes.func
};

export default Hamburger;