import { takeLeading } from 'redux-saga/effects'
import {getMontlyForecast, getCurrentLocationForecast, getWeeklyForecast} from './saga'

export default function* watchFetchForecast() {
    yield takeLeading('FORECAST/GET_MONTHLY_FORECAST_SAGA', getMontlyForecast);
    yield takeLeading('FORECAST/GET_CURRENT_LOCATION_FORECAST_SAGA', getCurrentLocationForecast);
    yield takeLeading('FORECAST/GET_WEEKLY_FORECAST_SAGA', getWeeklyForecast);
  }