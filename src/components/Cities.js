import React, { useEffect, useState, useRef,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function Cities() {

    const [newCity, setNewCity] = useState('');
    const cities = useSelector(state => state.cities);    
    const dispatch = useDispatch();
    const isCityLoaded = useSelector(state => state.isCityLoaded);

    const AddNewCity = () => {
        dispatch({
            type: 'FORECAST/ADD_CITY',
            payload: newCity
          }) 
    }

    const RemoveCity = (city) =>{
        dispatch({
            type: 'FORECAST/REMOVE_CITY',
            payload: city
          }) 
    }

    const ChangeCity = (city) =>{
        dispatch({
            type: 'FORECAST/CHANGE_CITY',
            payload: {
                city: city,
                countryCode: 'BY',
                temperature: '12C'
            }
          })  
    }

    const GetCities = () => {
        dispatch({
            type: 'FORECAST/GET_CITIES'
          })  
    }

    useEffect(() => { 
        
        if(!isCityLoaded)
            return;

        localStorage.setItem('Cities', JSON.stringify(cities));
        },[cities])

    useEffect(() => {
        GetCities();
        },[])

  return (
    <div className="cities-block">
        <div className='add-section'>
            <button onClick={AddNewCity}>Add new city</button>
            <input type='text' value={newCity} onChange={e => setNewCity(e.target.value)}></input>
        </div>      
        
        <div className='cities-list'>
            {cities.length > 0 ?
                cities.map((item, idx) => (
                    <div key={idx} className='city-row'>
                        <span className='city-item' onClick={e => ChangeCity(item)}>{item}</span>
                        <span className='city-item' onClick={e => RemoveCity(item)}>X</span>
                    </div>
                  ))
                  : ''
            }
        </div>
    </div>
  );
}

export default Cities;