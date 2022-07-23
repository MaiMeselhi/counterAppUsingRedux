import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementAction = () => {
    return {
        type: INCREMENT,
    };
};
export const decrementAction = () => {
    return {
        type: DECREMENT,
    };
};
