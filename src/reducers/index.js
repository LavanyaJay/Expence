import { combineReducers } from "redux";
import accounts from "./accounts";
import category from "./category";
import chart from "./chart";
export default combineReducers({ accounts, category, chart });
