import img1 from "../../assets/gallery/dog1-small.jpg";
import img2 from "../../assets/gallery/dog2-small.jpg";
import img3 from "../../assets/gallery/dog3-small.jpg";
import { ActionTypes } from "./galleryRedux.types";
const INITIAL_STATE = {
  showImage: false,
  number: 0,
  photos: [
    {
      id: 1,
      picture: img1,
    },
    {
      id: 2,
      picture: img2,
    },
    {
      id: 3,
      picture: img3,
    },
  ],
};

export const picturesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.IMAGE_CHANGE:
      return { ...state, number: action.payload };
    case ActionTypes.SHOW_AND_HIDE_PICTURE:
      return { ...state, showImage: action.payload };
    default:
      return state;
  }
};

export default picturesReducer;
