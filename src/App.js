import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import apiFetch from './api'
import './App.css';
import Marker from './Marker'

function App() {
  const [facilities, setFacilities] = useState([]);
  const [activefacility, setActiveFacility] = useState(null);
  
  const handleFacilities = (facilities) => {
    setFacilities(facilities);
  } 

  useEffect(() => {
    async function getFacilities() {
      const { facilities } = await apiFetch('http://localhost:3010/facilities')
      return handleFacilities(facilities)
    }
    getFacilities()
  }, [facilities.length]);

  const handleOnChildClick = (event) => {
    setActiveFacility(event)
  }

  const handleOnChildMouseEnter = (event) => {
    console.log('hover enter!', event)
  }

  const handleOnChildMouseLeave = (event) => {
    console.log('hover leave!', event)
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyASpank-mc7rMHuFCII7W6ZYuBmtWgyfjM' }}
        defaultCenter={{lat: 51.5310981, lng: -0.1145346}}
        defaultZoom={13.33}
        onChildClick={handleOnChildClick}
        onChildMouseEnter={handleOnChildMouseEnter}
        onChildMouseLeave={handleOnChildMouseLeave}
      >
      {
        facilities.map(facility => (
          <Marker
            key={facility.id}
            facility={facility}
            lat={facility.location[0]}
            lng={facility.location[1]}
            showBalloon={activefacility === facility.id}
            color='blue'
          ></Marker>
        ))
      }
      </GoogleMapReact>
    </div>
  );
}

export default App;
