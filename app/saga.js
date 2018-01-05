import { call, put, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_WEATHER } from 'constants/index';
import {
  loadWeatherError, loadWeatherSuccess, changeSearchInput,
} from 'actions/AppActions';

function* getWeatherInfo({ cityName }) {
  const requestURL = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fb3c12521225804cca31fa8c121eb976`;

  try {
    const result = yield call(request, requestURL);
    yield put(loadWeatherSuccess(
      cityName,
      result.weather,
    ));
    yield put(loadWeatherSuccess(
      cityName,
      result.weather,
    ));
    yield put(changeSearchInput(''));
  } catch (err) {
    yield put(loadWeatherError('please input correct city'));
  }
}

export default function* weatherData() {
  yield takeEvery(LOAD_WEATHER, getWeatherInfo);
}
