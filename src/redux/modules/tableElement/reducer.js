import { actionTypes } from "./action-types";

const selectedItem = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SELECT_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default selectedItem;
