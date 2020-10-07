import * as types from "../../constants/constTypes";

const initState = {
    totalScore: "0"
};

const totalScoreReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TOTAL_SCORE:
            return {
                ...state,
                ...{ totalScore: action.payload }
            };

        default:
            return state;
    }
};

export default totalScoreReducer;