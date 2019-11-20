import React from 'react';
import './balloon.css'

function HoverBalloon({ facility }) {
  const { name } = facility
  return (
    <div class='hover-balloon'>{name}</div>
  )
}

export default HoverBalloon