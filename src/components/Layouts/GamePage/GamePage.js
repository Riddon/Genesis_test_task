import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "./GamePage.css";
import Hamburger from "../../General/Hamburger/Hamburger";
import EarnedList from "../../DataDisplay/EarnedList/EarnedList";
import {useDispatch, useSelector} from "react-redux";
import QuestionContent from "../../DataDisplay/QuestionContent/QuestionContent";
import {routes} from '../../../constants/constRoutes';
import * as totalScoreActions from "../../../actions/totalScoreActions";

const GamePage = () => {

    const generalQuestionList = useSelector(state => state.questionsReducer.questions);
    const [openMenu, setOpenMenu] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    let currentQuestionInfo = {};
    let history = useHistory();
    const dispatch = useDispatch();
    let [selectedAnswer, setSelectedAnswer] = useState("");
    let [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    let [showWrongAnswer, setShowWrongAnswer] = useState(false);
    let [hovered, setHovered] = useState(true);
    let timeoutCorrectAnswer;
    let timeoutWrongAnswer;

    useEffect(()=>{
        clearTimeout(timeoutCorrectAnswer);
        clearTimeout(timeoutWrongAnswer);
    });

    if(generalQuestionList.length > 0) {
        currentQuestionInfo = generalQuestionList.find(item => item.id === questionNumber);
    }

    const checkAnswer = (data) => {
        setSelectedAnswer(data);
        setHovered(false);

        timeoutCorrectAnswer = setTimeout(()=>{
            setShowCorrectAnswer(true);
        }, 2000);

        timeoutWrongAnswer = setTimeout(()=>{
            setShowWrongAnswer(true);
        }, 2000);
    };

    const showMenu = () => {
        setOpenMenu(!openMenu);
    };

    const changeQuestion = (data) => {

        if (questionNumber > 0 && questionNumber <= generalQuestionList.length) {

            checkAnswer(data);

            setTimeout(
                () => {
                    if (data === currentQuestionInfo.correctAnswer) {
                        setQuestionNumber(questionNumber + 1);
                        setSelectedAnswer("");
                        setShowCorrectAnswer(false);
                        setShowWrongAnswer(false);
                        setHovered(true);

                        dispatch(totalScoreActions.setTotalScore(currentQuestionInfo.money));
                    } else {
                        history.push(routes.result.href);
                    }
                }, 4000);
        }
    };

    return (
        <div className="game-page">
            <Hamburger
                openMenu={openMenu}
                onClick={showMenu}
            />

            <QuestionContent
                currentQuestion={currentQuestionInfo}
                onClick={changeQuestion}
                selectedAnswer={selectedAnswer}
                showCorrectAnswer={showCorrectAnswer}
                showWrongAnswer={showWrongAnswer}
                hovered={hovered}
            />

            <EarnedList
                openMenu={openMenu}
                questionList={generalQuestionList}
                currentQuestion={questionNumber}
            />
        </div>
    );
};

export default GamePage;
