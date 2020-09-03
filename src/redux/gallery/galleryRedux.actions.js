import { ActionTypes } from "./galleryRedux.types";

export const arrowPictureChange = (item) => ({
  type: ActionTypes.IMAGE_CHANGE,
  payload: item,
});
export const showAndHidePictureAction = (item) => ({
  type: ActionTypes.SHOW_AND_HIDE_PICTURE,
  payload: item,
});

export default arrowPictureChange;
