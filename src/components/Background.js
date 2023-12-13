import React from 'react'
import '../css/Background.css'

const Background = ({text}) => {
  return (
    <div className="background-container" style={{color: 'white'}}><h1>{text}</h1></div>
  )
}

export default Background