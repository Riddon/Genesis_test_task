import React from "react";
import "./HomePage.css";
import ButtonStartGame from "../../General/Buttons/ButtonStartGame";
import {routes} from '../../../constants/constRoutes';
import hand from '../../../images/home_page_hand.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="box-split">
                {consss}
            </div>

            <img className="home-page-image" src={hand} alt="hand" />

            <div className="home-page-content">
                <h2 className="home-page-content-title">
                    Who wants to be a millionaire?
                </h2>
                <ButtonStartGame title="Start" route={routes.game.href}/>
            </div>
        </div>
    );
};

export default HomePage;