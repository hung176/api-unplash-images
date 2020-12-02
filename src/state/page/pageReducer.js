// action
const IMAGE_LOAD_SUCCESS = 'IMAGE_LOAD_SUCCESS';

// reducer
export function pageReducer(state = 1, action) {
  switch(action.type) {
    case IMAGE_LOAD_SUCCESS:
      return state + 1;
    default:
      return state;
  }
}