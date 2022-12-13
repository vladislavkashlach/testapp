import { put } from 'redux-saga/effects'
import axios from 'axios'

export function* getMontlyForecast(props) {
    try {
        const URL = 'https://localhost:7003/api/WeatherForecast/GetMonthlyForeCast'
        const { data } = yield axios.get(URL)
        yield put({
            type: 'FORECAST/GET_MONTHLY_FORECAST',
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export function* getCurrentLocationForecast(props) {
    try {
        const URL = 'https://localhost:7003/api/WeatherForecast/GetCurrentLocationForecast'
        const { data } = yield axios.get(URL)
        yield put({
            type: 'FORECAST/GET_CURRENT_LOCATION_FORECAST',
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export function* getWeeklyForecast() {
    try {
        const URL = 'https://localhost:7003/api/WeatherForecast/GetWeeklyForecast'
        const { data } = yield axios.get(URL)
        yield put({
            type: 'FORECAST/GET_WEEKLY_FORECAST',
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}