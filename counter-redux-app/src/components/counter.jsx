import { useDispatch, useSelector } from "react-redux/es/exports";
import {
    decrementAction,
    incrementAction,
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
    return (
        <div>
            <p>{countState}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
