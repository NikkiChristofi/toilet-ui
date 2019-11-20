import React from 'react';
import Balloon from './Balloon'
import HoverBalloon from './HoverBalloon'
import './marker.css'

function Marker({ facility, color, showBalloon, showHoverBalloon }) {
  const { name } = facility

  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className="pulse" />
      {showBalloon && <Balloon facility={facility} />}
      {showHoverBalloon && <HoverBalloon facility={facility} />}
    </div>
  )
}

export default Marker