import { Types } from './action.type'
import * as weatherApi from '../api/weather-api/weather-api';

function loadWeatherSuccess(weather) {
    return { type: Types.WEATHER_LOAD_SUCCESS, weather }
}


export function loadWeather(city) {
    return function (dispatch) {
        return weatherApi.getWeather(city)
            .then(weather => {
                dispatch(loadWeatherSuccess(weather))
            })
            .catch(error => {
                return error;
            })
    }
}
