import { applyMiddleware, createStore } from "redux";
import taskReducer from "../reducers/taskReducer";
import { intervalMiddleware } from "./intervalMiddleware";

export const store = createStore(
  taskReducer,
  applyMiddleware(intervalMiddleware)
);
