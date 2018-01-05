import { fromJS, Map } from 'immutable';

import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
} from 'constants/index';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: '',
  data: Map(),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WEATHER:
      return state
        .set('loading', true)
        .set('error', '');
    case LOAD_WEATHER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_WEATHER_SUCCESS:
      return state
        .setIn(['data', action.cityName.toLowerCase()], action.weather)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
