import { actionTypes } from "./action-types";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default items;
