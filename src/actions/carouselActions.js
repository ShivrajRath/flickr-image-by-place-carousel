import {
  FETCH_PLACE_IMAGES,
  ADD_TO_CAROUSEL,
  GET_NEXT_IMAGE,
  GET_PREV_IMAGE,
  START_LOADER,
  STOP_LOADER
} from "./types";
import environment from "../environments/environment";
import constants from "../constants";

const getImages = (place, pageNumber) => {
  return Promise.race([
    fetch(
      `${environment.apihost}/images/${place}/${pageNumber}/${
        constants.pageSize
      }`
    ).then(res => res.json()),
    new Promise((resolve, reject) =>
      setTimeout(
        () => reject(new Error("fetch timeout")),
        constants.fetchTimeout
      )
    )
  ]);
};

export const fetchPlaceImages = (place, pageNumber) => dispatch => {
  getImages(place, pageNumber)
    .then(photos =>
      dispatch({
        type: FETCH_PLACE_IMAGES,
        payload: {
          place,
          pageNumber,
          photos: photos.photo,
          totalPages: photos.pages
        }
      })
    )
    .catch(ex => {
      alert("Ooops!! Something went wrong. Please try again!");
    })
    .finally(() => {
      stopLoader(dispatch);
    });
};

export const nextImage = (addNewPhotos, place, pageNumber) => dispatch => {
  dispatch({
    type: GET_NEXT_IMAGE
  });
  if (addNewPhotos) {
    addToCarousel(place, pageNumber);
  }
};

export const prevImage = () => dispatch => {
  dispatch({
    type: GET_PREV_IMAGE
  });
};

export const addToCarousel = (place, pageNumber) => dispatch => {
  getImages(place, pageNumber).then(photos =>
    dispatch({
      type: ADD_TO_CAROUSEL,
      payload: {
        place,
        pageNumber,
        photos: photos.photo,
        totalPages: photos.pages
      }
    })
  );
};

export const startLoading = () => dispatch => {
  dispatch({
    type: START_LOADER,
    payload: true
  });
};

function stopLoader(dispatch) {
  dispatch({
    type: STOP_LOADER,
    payload: false
  });
}

export const stopLoading = () => dispatch => stopLoader(dispatch);
