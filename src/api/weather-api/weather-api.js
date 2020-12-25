import { handleError, handleResponse } from '../apiUtils';

const adress = "http://api.openweathermap.org/data/2.5/weather";
const appid = "37fefb92c95195f8d22aa130109e3447";
const parameter = "metric";

export function getWeather(city) {
    return fetch(`${adress}?q=${city}&appid=${appid}&units=${parameter}`)
        .then(handleResponse)
        .catch(handleError)
}

