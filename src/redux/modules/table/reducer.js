import { actionTypes } from "@/redux/modules/table/action-types";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return action.payload;
    case actionTypes.ADD_ITEM:
      return [{...action.payload}, ...state];
    default:
      return state;
  }
};

export default items;
