import { actionTypes } from "./action-types";

const initialState = {
  items: [],
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default items;
