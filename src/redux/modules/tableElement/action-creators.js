import { actionTypes } from "./action-types";

export const selectItem = (payload) => ({
  type: actionTypes.SELECT_ITEM,
  payload,
});
