import { combineReducers } from "redux";

import items from "@/redux/modules/table/reducer";
import selectedItem from "@/redux/modules/tableElement/reducer";

const rootReducer = combineReducers({
  items,
  selectedItem,
});

export default rootReducer;