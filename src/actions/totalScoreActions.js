import * as types from "../constants/constTypes";

export function setTotalScore(score) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_TOTAL_SCORE,
            payload: score
        });
    };
}