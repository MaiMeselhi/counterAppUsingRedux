import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./actionTypes";

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
export const incrementByValueAction = (value) => {
    return {
        type: INC_BY_VALUE,
        value: value,
    };
};
