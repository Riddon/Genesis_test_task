import React from 'react';
import {Switch, Route} from "react-router-dom";
import {routes} from '../constants/constRoutes';
import HomePage from "../components/Layouts/HomePage/HomePage";
import GamePage from "../components/Layouts/GamePage/GamePage";
import GameOverPage from "../components/Layouts/GameOverPage/GameOverPage";


const RoutesLayout = () => {

    return (
        <Switch>
            <Route exact path={routes.home.href} component={HomePage}/>
            <Route exact path={routes.game.href} component={GamePage}/>
            <Route exact path={routes.result.href} component={GameOverPage}/>
        </Switch>
    )
};

export default RoutesLayout;