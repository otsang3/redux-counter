import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions/index';

function App() {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        const value = e.target.name;
        let action;
        switch (value) {
            case 'INCREASE':
                action = increment();
                break;
            case 'DECREASE':
                action = decrement();
                break;
            case 'RESET':
                action = reset();
                break;
            default:
                return;
        }
        dispatch(action);
    };
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button name="INCREASE" onClick={handleClick}>
                Increase
            </button>
            <button name="DECREASE" onClick={handleClick}>
                Decrease
            </button>
            <button name="RESET" onClick={handleClick}>
                Reset
            </button>
        </div>
    );
}

export default App;
