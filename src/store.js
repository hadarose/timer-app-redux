import { applyMiddleware, createStore } from "redux";
import taskReducer from "./reducers/taskReducer";
import { tick } from "./actions/actions";

let intervalHandle;
const intervalMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === "START_TIMER") {
        clearInterval(intervalHandle);
        intervalHandle = setInterval(() => dispatch(tick()), 1000);
      }

      if (action.type === "STOP_TIMER") {
        clearInterval(intervalHandle);
      }
      next(action);
    };
  };
};

export const store = createStore(
  taskReducer,
  applyMiddleware(intervalMiddleware)
);
