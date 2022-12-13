import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudShowersHeavy, faSun } from '@fortawesome/free-solid-svg-icons';

function ExtendedWeatherDay({img, dayTemperature, nightTemperature, humidity, dayOfWeek}) {

  return (
    <div className="extended-day-section">      
        <span className='cell'>{dayOfWeek}</span>
        <span className='cell'><FontAwesomeIcon icon={img === 0 ? faCloud  : img === 1 ? faCloudShowersHeavy : faSun} /></span>
        <span className='cell'>{dayTemperature}</span>
        <span className='cell'>{nightTemperature}</span>
        <span className='cell'>Humidity: {humidity}</span>
    </div>
  );
}

export default ExtendedWeatherDay;