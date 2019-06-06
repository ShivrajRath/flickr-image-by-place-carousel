import { FETCH_PLACE_IMAGES, ADD_TO_CAROUSEL, GET_NEXT_IMAGE, GET_PREV_IMAGE } from "./types";
import environment from "../environments/environment";

export const fetchPlaceImages = place => dispatch => {
  fetch(`${environment.host}/${place}/1/10`)
    .then(res => res.json())
    .then(photos =>
      dispatch({
        type: FETCH_PLACE_IMAGES,
        payload: photos
      })
    );
};

export const nextImage = () => dispatch => {
  dispatch({
    type: GET_NEXT_IMAGE
  })
}

export const prevImage = () => dispatch => {
  dispatch({
    type: GET_PREV_IMAGE
  })
}


export const addToCarousel = () => dispatch => {};