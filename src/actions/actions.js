import {
  ADD_TASK,
  START_TIMER,
  STOP_TIMER,
  TICK,
} from "../constants/actionTypes";

export const addTask = (name) => ({ type: ADD_TASK, name });

export const startTimer = (taskId) => ({ type: START_TIMER, taskId });

export const stopTimer = () => ({ type: STOP_TIMER });

export const tick = () => ({ type: TICK });
