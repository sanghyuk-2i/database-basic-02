import { combineReducers } from "redux";
import Items from "./Items";
import Details from "./Details";
import Nav from "./Nav";

const RootReducer = combineReducers({ Items, Details, Nav });

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
