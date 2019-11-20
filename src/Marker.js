import React, { useState, useEffect } from 'react';
import './marker.css'

function Marker({facility, color, showBalloon}) {
  const { name } = facility

  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className="pulse" />
      {showBalloon && <div>BALLOOOOOON</div>}
    </div>
  )
}

export default Marker