import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { imagesReducer, watchImagesSaga } from './loadimages/imagesReducer';
import { pageReducer } from './page/pageReducer';

export const rootReducer = combineReducers({
  images: imagesReducer,
  nextPage: pageReducer
});

export function* rootSaga() {
  yield all([watchImagesSaga()]);
}