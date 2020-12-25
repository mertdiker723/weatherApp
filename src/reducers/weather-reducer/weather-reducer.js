import { Types } from '../../actions/action.type';
import initialState from './initial-reducer';

export function weatherReducer(state = initialState.weather, action) {
    switch (action.type) {
        case Types.WEATHER_LOAD_SUCCESS:
            return action.weather;
        default:
            return state;
    }
}

