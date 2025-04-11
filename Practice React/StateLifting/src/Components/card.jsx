import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h2>Pta nhi kr raha hu kuch toh</h2>
      <input type="text" onChange={(e)=> props.setvalue(e.target.value)} />
      <p>Value to name inside card is : {props.name}</p>
      
    </div>
  )
}

export default Card
