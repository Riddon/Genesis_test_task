import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import RoutesLayout from "../routes/RoutesLayout";
import "./App.css";
import getQuestionsAPI from "../services/getQuestionsAPI";
import * as questionsActions from "../actions/questionsActions";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getQuestionsAPI("questions.json").then((data) => {
            console.log("Received data from url -->", data);
            dispatch(questionsActions.getList(data));
        });
    });

    return (
    <div className="app">
      <RoutesLayout/>
    </div>
    );
};

export default App;
