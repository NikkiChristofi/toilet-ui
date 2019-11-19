import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import apiFetch from './api'
import './App.css';

function App() {
  const [facilities, setFacilities] = useState([]);
  
  const handleFacilities = (facilities) => {
    console.log('here', typeof(facilities))
    setFacilities(facilities);
  } 

  useEffect(() => {
    async function getFacilities() {
      const { facilities } = await apiFetch('http://localhost:3010/facilities')
      console.log('FACILITIES', typeof(facilities))
      return handleFacilities(facilities)
    }
    getFacilities()
  });

  console.log('FACILITIES', facilities)
  return (
    <div className="App">
      <header className="App-header">
      <div>
        {
          facilities.map(facility => (
            <div>{facility.name}</div>
          ))
        }
      </div>
      </header>
    </div>
  );
}

export default App;
