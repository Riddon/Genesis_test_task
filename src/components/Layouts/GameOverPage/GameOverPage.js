import React from "react";
import {useSelector} from "react-redux";
import "./GameOverPage.css";
import ButtonStartGame from "../../General/Buttons/ButtonStartGame";
import {routes} from '../../../constants/constRoutes';
import hand from '../../../images/home_page_hand.png';

const GameOverPage = () => {

    let totalScore = useSelector(state => state.totalScoreReducer.totalScore);

    return (
        <div className="game-over-page">

            <img className="game-over-page-image" src={hand} alt="hand" />

            <div className="game-over-page-content">
                <h2 className="game-over-page-content-title">Total score:</h2>
                <h2 className="game-over-page-content-result">
                    {`$ ${totalScore} earned`}
                </h2>
                <ButtonStartGame title="Try again" route={routes.game.href}/>
            </div>
        </div>
    );
};

export default GameOverPage;