import {
  ADD_TO_CAROUSEL,
  FETCH_PLACE_IMAGES,
  GET_NEXT_IMAGE,
  GET_PREV_IMAGE,
  START_LOADER,
  STOP_LOADER
} from "../actions/types";

const initialState = {
  photos: [],
  place: "",
  pagesFetched: 0,
  currentPhotoIndex: 0,
  totalPages: 0,
  isLoading: false,
  noImageFound: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLACE_IMAGES:
      return {
        ...state,
        place: action.payload.place,
        pagesFetched: action.payload.pageNumber,
        photos: action.payload.photos,
        totalPages: action.payload.totalPages,
        currentPhotoIndex: 0,
        noImageFound: !action.payload.photos.length
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
    case ADD_TO_CAROUSEL:
      return {
        ...state,
        place: action.payload.place,
        pagesFetched: action.payload.pageNumber,
        photos: [...state.photos, ...action.payload.photos],
        totalPages: action.payload.totalPages
      };
    case START_LOADER:
    case STOP_LOADER:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
