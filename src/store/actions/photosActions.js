export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";

export const photosActions = () => async dispatch => {
    dispatch(fetchingImagesRequest());
  
    try {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`);
      const json = await response.json();
      dispatch(fetchingImagesSucces(json));
    } catch (error) {
      dispatch(fetchingImagesFailure(error));
    }
  };

export const getPhotosRequest = () => ({
  type: GET_PHOTOS_REQUEST
});

export const getPhotosSuccess = photos => ({
  type: GET_PHOTOS_SUCCESS,
  payload: { photos }
});

export const getPhotosFailure = error => ({
  type: GET_PHOTOS_FAILURE,
  payload: { error }
});