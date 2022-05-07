import { combineReducers } from "redux";
import Items from "./Items";
import Details from "./Details";

const RootReducer = combineReducers({ Items, Details });

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
