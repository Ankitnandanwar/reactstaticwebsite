import React from 'react'
import './style.css'

function Miniproj1(props){
  return (
    <div className='gallery-container'>
    <div className='gallery-div'>
        <img src={props.imgsrc} className="coffee1" alt='rings-of-power'/>
        <h3>{props.title}</h3>
        <p>{props.descript}</p>
        <a href={props.link} target="blank"><button className="buy-1">Watch Now</button></a>
    </div>
    </div>
  )
}

export default Miniproj1