import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudShowersHeavy, faSun } from '@fortawesome/free-solid-svg-icons';
function WeatherDay({day, img, graduate}) {

  return (
    <div className="day-section">      
        <span>{day}</span>
        <span><FontAwesomeIcon icon={img === 0 ? faCloud  : img === 1 ? faCloudShowersHeavy : faSun} /></span>
        <span>{graduate}</span>      
    </div>
  );
}

export default WeatherDay;