import './App.css';
import WeatherDay from './WeatherDay';
import ExtendedWeatherDay from './ExtendedWeatherDay'
import Cities from './Cities'
import '../saga/saga'
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const monthlyForecast = useSelector(state => state.monthlyForecast);
  const weeklyForecast = useSelector(state => state.weeklyForecast);
  const currentLocationForecast = useSelector(state => state.currentLocationForecast);
  const dispatch = useDispatch();

 const GetMonthForecast = useCallback (() =>{
    dispatch({
      type: 'FORECAST/GET_MONTHLY_FORECAST_SAGA'
    })  
  },[dispatch])

  const GetCurrentLocationForecast = useCallback (() =>{
    dispatch({
      type: 'FORECAST/GET_CURRENT_LOCATION_FORECAST_SAGA'
    })  
  },[dispatch])

  const GetWeeklyForecast = useCallback (() =>{
    dispatch({
      type: 'FORECAST/GET_WEEKLY_FORECAST_SAGA'
    })  
  },[dispatch])

  useEffect(() => { 
    GetMonthForecast();
    GetCurrentLocationForecast();
    GetWeeklyForecast();
  },[])

  useEffect(() => { 
    GetMonthForecast();
    GetWeeklyForecast();
  },[currentLocationForecast])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{currentLocationForecast.city}, {currentLocationForecast.countryCode}</h1>
        <p className="current-weather-info">
          {currentLocationForecast.temperature}, Cloudly
        </p>        
      </header>
      <div className="body">
        <div className="weather-month-section">
          {
              monthlyForecast.map((item, idx) => (
              <WeatherDay day={item.day} img={item.imgClass} graduate = {item.temperature} key={idx} />
            ))
          }
        </div>
        <div className='body-section'>
            <div className="weather-weekly-section">
              {
                  weeklyForecast.map((item, idx) => (
                  <ExtendedWeatherDay 
                            dayOfWeek={item.dayOfWeek} 
                            img={item.imgClass} 
                            dayTemperature = {item.dayTemperature} 
                            nightTemperature = {item.nightTemperature}
                            humidity = {item.humidity}
                            key={idx} />
                ))
              }
            </div>
            <div className="cities-section">
              {
                  <Cities/>
              }
            </div>
        </div>


      </div>
    </div>
  );
}

export default App;
