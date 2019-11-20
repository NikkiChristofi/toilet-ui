import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import apiFetch from './api'
import './App.css';
import Marker from './Marker'

function App() {
  const [facilities, setFacilities] = useState([]);
  const [activefacility, setActiveFacility] = useState(null);
  const [hoveredFacility, setHoveredFacility] = useState(null);
  
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
    setActiveFacility(event === activefacility ? null : event)
    setHoveredFacility(null)
  }

  const handleOnChildMouseEnter = (event) => {
    setHoveredFacility(event)
  }

  const handleOnChildMouseLeave = (event) => {
    setHoveredFacility(null)
  }
  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
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
            showHoverBalloon={hoveredFacility === facility.id}
            color='blue'
          ></Marker>
        ))
      }
      </GoogleMapReact>
    </div>
  );
}

export default App;
