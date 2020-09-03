import { combineReducers } from "redux";
import textReducer from "../redux/text/text.reducer";
import picturesReducer from "../redux/gallery/galleryRedux.reducer";

export default combineReducers({
  text: textReducer,
  pictures: picturesReducer,
});
