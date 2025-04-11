import React, {useState} from 'react'
import './Counter.css'


const Counter = () => {
  const [countno, FunToIncCount] = useState(0) //Use if hooks
  return (
    <div className='Ccontainer'>
      <p>
        Your clicked {countno} times
      </p>
      <button className='btn' onClick={() => {FunToIncCount(countno + 1) }} >
        Click me
      </button>
    </div>

  )
}

export default Counter
