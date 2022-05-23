import { combineReducers } from "redux";
import Items from "./Items";
import Details from "./Details";
import Nav from "./Nav";
import Search from "./Search";

const RootReducer = combineReducers({ Items, Details, Nav, Search });

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
