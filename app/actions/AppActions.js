import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
  CHANGE_SEARCH_INPUT,
} from 'constants/index';

export function loadWeather(cityName) {
  return {
    type: LOAD_WEATHER,
    cityName,
  };
}

export function loadWeatherSuccess(cityName, weather) {
  return {
    type: LOAD_WEATHER_SUCCESS,
    cityName,
    weather,
  };
}

export function loadWeatherError(error) {
  return {
    type: LOAD_WEATHER_ERROR,
    error,
  };
}

export function changeSearchInput(value) {
  return {
    type: CHANGE_SEARCH_INPUT,
    value,
  };
}
