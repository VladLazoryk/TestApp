import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { photosReducer } from "./reducers/photosReducer";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    imagesData: photosReducer,
  });

export const store = createStore(rootReducer, middleWare)