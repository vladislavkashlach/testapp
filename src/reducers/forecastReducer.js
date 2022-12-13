const initialState = {
    monthlyForecast:[],
    weeklyForecast:[],
    currentLocationForecast: {},
    currentCity: ''
}

export default function forecastReducer(state = initialState, action) {

    switch (action.type) {
        case 'FORECAST/GET_MONTHLY_FORECAST':
            return { ...state, monthlyForecast: action.payload }
        case 'FORECAST/GET_MONTHLY_FORECAST_SAGA':
            return { ...state, isLoaded: true }
        case 'FORECAST/GET_CURRENT_LOCATION_FORECAST':
            return { ...state, currentLocationForecast: action.payload }
        case 'FORECAST/GET_WEEKLY_FORECAST':
            return { ...state, weeklyForecast: action.payload }
        case 'FORECAST/CHANGE_CITY':
            return { ...state, currentLocationForecast: action.payload }
        default:
            return state
    }
}