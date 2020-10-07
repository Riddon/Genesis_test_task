import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer/questionsReducer";
import totalScoreReducer from "./totalScoreReducer/totalScoreReducer";

export default combineReducers({
    questionsReducer,
    totalScoreReducer
});