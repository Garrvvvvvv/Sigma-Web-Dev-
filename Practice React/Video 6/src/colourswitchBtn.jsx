import React from 'react'

const colourswitchBtn = (props) => {
  return (
    <div>
        <button onClick={(e)=>{
            e.stopPropagation();
            props.onchangecolour();
            props.setcolourcode();

        }}>Change Colour</button>
      
    </div>
  )
}

export default colourswitchBtn
