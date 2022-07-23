import { useDispatch, useSelector } from "react-redux/es/exports";
import {
    decrementAction,
    incrementAction,
    incrementByValueAction,
} from "../redux/actions/counterActions";

const Counter = () => {
    const countState = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementAction());
    };
    const handleDecrement = () => {
        dispatch(decrementAction());
    };
    const handleIncrementByValue = (value) => {
        dispatch(incrementByValueAction(value));
    };
    return (
        <div>
            <p>{countState}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrementByValue(3)}>
                Increment by value
            </button>
        </div>
    );
};

export default Counter;
