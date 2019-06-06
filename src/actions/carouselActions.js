import { FETCH_PLACE_IMAGES, ADD_TO_CAROUSEL, GET_NEXT_IMAGE, GET_PREV_IMAGE } from "./types";
import environment from "../environments/environment";

const pageSize = 20;

const getImages = (place, pageNumber) => {
  return fetch(`${environment.host}/${place}/${pageNumber}/${pageSize}`)
  .then(res => res.json());
}

export const fetchPlaceImages = (place, pageNumber) => dispatch => {
  getImages(place, pageNumber)
    .then(photos =>
      dispatch({
        type: FETCH_PLACE_IMAGES,
        payload: {place, pageNumber, photos: photos.photo, totalPages: photos.pages}
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