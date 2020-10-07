import React from "react";
import {Link} from "react-router-dom";
import './ButtonStartGame.css';

const ButtonStartGame = (props) => {

    const {title, route} = props;

    return (
        <button className="button-start-game">
            <Link className="button-start-game-link" to={route}>{title}</Link>
        </button>
    );
};

export default ButtonStartGame;