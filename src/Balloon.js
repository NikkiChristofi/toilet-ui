import React from 'react';
import './balloon.css'

function Balloon({ facility }) {
  const { name } = facility
  return (
    <div class='balloon'>{name} extra info</div>
  )
}

export default Balloon