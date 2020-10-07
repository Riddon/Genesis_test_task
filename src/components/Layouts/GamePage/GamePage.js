import React,{ useState } from "react";
import { useHistory } from "react-router-dom";
import "./GamePage.css";
import Hamburger from "../../General/Hamburger/Hamburger";
import EarnedList from "../../DataDisplay/EarnedList/EarnedList";
import {useSelector} from "react-redux";
import QuestionContent from "../../DataDisplay/QuestionContent/QuestionContent";
import {routes} from '../../../constants/constRoutes';

const GamePage = () => {

    const generalQuestionList = useSelector(state => state.questionsReducer.questions);
    const [openMenu, setOpenMenu] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    let currentQuestionInfo = {};
    let history = useHistory();

    if(generalQuestionList.length > 0) {
        currentQuestionInfo = generalQuestionList.find(item => item.id === questionNumber);
    }

    const showMenu = () => {
        setOpenMenu(!openMenu);
    };

    const changeQuestion = (data) => {

        if (questionNumber > 0 && questionNumber <= generalQuestionList.length) {
            setTimeout(
                () => {
                    if (data === currentQuestionInfo.correctAnswer) {
                        setQuestionNumber(questionNumber + 1);
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
                onClick={showMenu}/>

            <QuestionContent currentQuestion={currentQuestionInfo} onClick={changeQuestion}/>

            <EarnedList
                openMenu={openMenu}
                questionList={generalQuestionList}
                currentQuestion={questionNumber}/>
        </div>
    );
};

export default GamePage;
