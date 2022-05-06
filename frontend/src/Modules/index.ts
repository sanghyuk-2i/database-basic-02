import { combineReducers } from "redux";
import Items from "./Items";

const RootReducer = combineReducers({ Items });

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
