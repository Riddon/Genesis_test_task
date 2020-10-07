import * as types from "../../constants/constTypes";

const initState = {
    questions: []
};

const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_ALL_QUESTIONS:
            return {
                ...state,
                ...{ questions: action.payload }
            };

        default:
            return state;
    }
};

export default questionsReducer;