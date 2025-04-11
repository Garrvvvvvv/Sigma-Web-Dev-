import React from 'react'
import "./Usercard.css"


const Usercard = (props) => {
  return (
    <div className='User-conatiner'>
      <p className='User-title'>{props.name}</p>
      <img className='User-image' src={props.img} alt="Love User" ></img>
      <p className='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard

