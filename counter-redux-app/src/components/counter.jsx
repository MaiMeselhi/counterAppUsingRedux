import { useDispatch, useSelector } from "react-redux/es/exports";
import { DECREMENT, INCREMENT } from "../redux/actions/actionTypes";

const Counter = () => {
    const countState = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: INCREMENT });
    };
    const handleDecrement = () => {
        dispatch({ type: DECREMENT });
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
