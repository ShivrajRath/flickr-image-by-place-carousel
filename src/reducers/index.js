import { combineReducers } from 'redux';
import carouselReducer from './carouselReducer';

export default combineReducers({
  carousel: carouselReducer
})