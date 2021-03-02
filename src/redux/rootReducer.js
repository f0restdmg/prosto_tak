import { combineReducers } from "redux";
import items from "./modules/table/reducer";
import selectedItem from "./modules/tableElement/reducer";

const rootReducer = combineReducers({
  items,
  selectedItem,
});

export default rootReducer;