import { createSelector } from "reselect";
export const selectPictures = (state) => state.pictures;
export const selectPicturesList = createSelector(
  [selectPictures],
  (pictures) => pictures.photos
);
export const selectNumber = createSelector(
  [selectPictures],
  (pictures) => pictures.number
);
export const selectShowImage = createSelector(
  [selectPictures],
  (pictures) => pictures.showImage
);
export default selectPictures;
