import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

function Cities() {

    const [cities, setCities] = useState([]);
    const [newCity, setNewCity] = useState('');
    const dispatch = useDispatch();
    const isLoaded = useRef(false);

    const AddNewCity = () => {
        const isExists = cities.some(item => item === newCity)
        if(isExists)
            return;

        setCities([...cities, newCity])        
    }

    const RemoveCity = (city) =>{
        setCities(cities.filter(item => item !== city));
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

    useEffect(() => { 

        if(!isLoaded.current)
            return;

        localStorage.setItem('Cities', JSON.stringify(cities));
        },[cities])

    useEffect(() => { 

        isLoaded.current = false;


        const saved = localStorage.getItem("Cities");
        if(saved && saved != null && saved !== '')
            setCities(JSON.parse(saved));

        isLoaded.current = true;
        },[])

  return (
    <div className="cities-block">
        <div className='add-section'>
            <button onClick={AddNewCity}>Add new city</button>
            <input type='text' value={newCity} onChange={e => setNewCity(e.target.value)}></input>
        </div>      
        
        <div className='cities-list'>
            {
                !cities ? '' : cities.map((item, idx) => (
                    <div key={idx} className='city-row'>
                        <span className='city-item' onClick={e => ChangeCity(item)}>{item}</span>
                        <span className='city-item' onClick={e => RemoveCity(item)}>X</span>
                    </div>
                  ))
            }
        </div>
    </div>
  );
}

export default Cities;