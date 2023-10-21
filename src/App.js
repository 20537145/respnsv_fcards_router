import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrementHandler,
  incrementHandler,
  resetHandler,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementHandler());
  };
  const handleDecrement = () => {
    dispatch(decrementHandler());
  };
  const handleReset = () => {
    dispatch(resetHandler());
  };
  const counter = useSelector((state) => state.l7esba);
  return (
    <div className="App">
      <button onClick={handleIncrement}>zid</button>
      <button onClick={handleDecrement}>na9s</button>
      <button>{counter}</button>
      <button onClick={handleReset}>safer</button>
    </div>
  );
}

export default App;
