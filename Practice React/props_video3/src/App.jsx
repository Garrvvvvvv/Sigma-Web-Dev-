import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function Application(props) {
  const [count, setcount] = useState(0)

  function inc_counter() {
    setcount(count + 1);

  }


  return (
    <div>
      <h1>You Clicked me {count} times</h1>
      <Button gaincount={(inc_counter)} />
    </div>

  )
} 

export default Application
