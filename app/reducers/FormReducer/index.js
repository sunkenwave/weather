import { fromJS } from 'immutable';

import {
  CHANGE_SEARCH_INPUT,
} from 'constants/index';

// The initial state of the App
const initialState = fromJS({
  search: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_INPUT:
      return state
        .set('search', action.value);
    default:
      return state;
  }
}

export default appReducer;
