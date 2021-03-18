import { actionTypes } from "@/redux/modules/tableElement/action-types";

export const selectItem = (payload) => ({
  type: actionTypes.SELECT_ITEM,
  payload,
});
