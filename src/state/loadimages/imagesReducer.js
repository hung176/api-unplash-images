import { takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchImages } from '../../api';

// actions
const IMAGE_LOAD = 'IMAGE_LOAD';
const IMAGE_LOAD_SUCCESS = 'IMAGE_LOAD_SUCCESS';
const IMAGE_LOAD_FAIL = 'IMAGE_LOAD_FAIL';

// reducer
export function imagesReducer(state = {
  isLoading: false,
  images: [],
  error: null
}, action) {
  switch(action.type) {
    case IMAGE_LOAD: 
      return({ ...state, isLoading: true });

    case IMAGE_LOAD_SUCCESS:
      return ({
        ...state,
        images: [...state.images, ...action.images],
        isLoading: false
      })
    
    case IMAGE_LOAD_FAIL:
      return ({ ...state, error: action.error, isLoading: false });
    
    default:
      return state;
  }
}

// sagas
const getPage = state => state.nextPage;

function* loadImagesSaga() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put({ type: IMAGE_LOAD_SUCCESS, images });
  
  } catch (error) {
    yield put({ type: IMAGE_LOAD_FAIL, error: error.toString() });
  }
}

export function* watchImagesSaga() {
  yield takeEvery(IMAGE_LOAD, loadImagesSaga);
}