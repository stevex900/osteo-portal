import { createSelector } from "reselect";

const selectText = (state) => state.text;
// const jakasInnaZmienna = (state) => state.jakisInnyReducer;

export const selectTextList = createSelector(
  [selectText],
  (text) => text.motto
);
export const selectIndex = createSelector(
  [selectText /*, jakasInnaZmienna*/],
  (text /*, jakisInnyReducer*/) => text.index
);
export const selectActive = createSelector([selectText], (text) => text.active);

export default selectTextList;
