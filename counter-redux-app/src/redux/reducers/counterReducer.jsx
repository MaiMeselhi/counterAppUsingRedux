import { DECREMENT, INCREMENT, INC_BY_VALUE } from "../actions/actionTypes";

const counterReducer = (
    state = { count: 0 },
    action = {
        type: INC_BY_VALUE,
        value: 3,
    }
) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INC_BY_VALUE:
            return { ...state, count: state.count + action.value };

        default:
            return state;
    }
};
export default counterReducer;
