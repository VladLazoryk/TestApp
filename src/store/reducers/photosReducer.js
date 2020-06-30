import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE
  } from "../actions/photosActions";
  
  const initialState = {
    photos: [],
    isFetching: false,
    error: null
  };
  
  export default function photosReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PHOTOS_REQUEST:
        return { ...state, isFetching: true, error: null };
      case GET_PHOTOS_SUCCESS:
        return {
          ...state,
          photos: action.payload.photos,
          isFetching: false
        };
      case GET_PHOTOS_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload.message
        };
      default:
        return state;
    }
  }