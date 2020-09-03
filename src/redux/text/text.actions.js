import { ActionTypes } from "./types";
export const arrowTextChange = (item) => ({
  type: ActionTypes.TEXT_CHANGE,
  payload: item,
});
export const menuActiveChange = (item) => ({
  type: ActionTypes.ACTIVE_CHANGE,
  payload: item,
});
// export default arrowTextChange;
