import { tick } from "../actions/actions";

let intervalHandle;
export const intervalMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === "START_TIMER") {
    clearInterval(intervalHandle);
    intervalHandle = setInterval(() => dispatch(tick()), 1000);
  }

  if (action.type === "STOP_TIMER") {
    clearInterval(intervalHandle);
  }

  next(action);
};
