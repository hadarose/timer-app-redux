import {
  ADD_TASK,
  START_TIMER,
  STOP_TIMER,
  TICK,
} from "../constants/actionTypes";

export const addTask = (name) => {
  return { type: ADD_TASK, name };
};

export const startTimer = (taskId) => {
  return { type: START_TIMER, taskId, elapsedTime: 0 };
};

export const stopTimer = () => {
  return { type: STOP_TIMER };
};

export const tick = () => {
  return { type: TICK };
};
