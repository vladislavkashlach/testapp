const initialState = {
    monthlyForecast:[],
    weeklyForecast:[],
    currentLocationForecast: {},
    cities: [],
    currentCity: '',
    isCityLoaded: false
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
        case 'FORECAST/GET_CITIES':
            const saved = localStorage.getItem("Cities");
            return { ...state, cities: saved == null ? [] : JSON.parse(saved), isCityLoaded : true }
        case 'FORECAST/ADD_CITY':
            const isExists = state.cities.some(item => item === action.payload)
            if(isExists)
                return state;
            return {...state, cities: [...state.cities, action.payload]}
        case 'FORECAST/REMOVE_CITY':
            return { ...state, cities: state.cities.filter(item => item !== action.payload) }
        default:
            return state
    }
}