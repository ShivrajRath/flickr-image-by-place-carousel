import {
  ADD_TO_CAROUSEL,
  FETCH_PLACE_IMAGES,
  GET_NEXT_IMAGE,
  GET_PREV_IMAGE
} from "../actions/types";

const initialState = {
  photos: [],
  place: "",
  pagesFetched: 0,
  currentPhotoIndex: 0,
  noPhotosFound: false,
  previousPhotosAvailable: false,
  nextPhotosAvailable: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLACE_IMAGES:
      return {
        ...state,
        photos: action.payload.photo
      };
    case GET_NEXT_IMAGE:
      // first image
      if (state.photos.length - 1 === state.currentPhotoIndex) {
        return state;
      }
      return {
        ...state,
        currentPhotoIndex: state.currentPhotoIndex + 1
      };
    case GET_PREV_IMAGE:
      // last image
      if (state.currentPhotoIndex === 0) {
        return state;
      }
      return {
        ...state,
        currentPhotoIndex: state.currentPhotoIndex - 1
      };
    default:
      return state;
  }
}
