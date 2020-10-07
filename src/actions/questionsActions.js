import * as types from "../constants/constTypes";

export function getList(list) {
    return (dispatch) => {
        dispatch({
            type: types.ADD_ALL_QUESTIONS,
            payload: list
        });
    };
}