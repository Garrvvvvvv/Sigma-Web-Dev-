// basic learning kya h 
// {
//   isme humne sikha ki phele hum app me vaue de rahe the aur use component me use lkr rahe the isme hmne kya kia state ko hum app me hi bna rahe h so props ka use krke hum value component me kr lemge aur agr component me change kiya toh hum main app me reflect kr saktre h 
// aur multiple child usse access kr rakhe h 
// }

import Card from './Components/card'
import './App.css'
import { useState } from 'react'

function App() {
 const[value, setvalue]=useState('');
  return (
    <div>
     <Card name={value} setvalue={setvalue}/>
    </div>
    
  )
}

export default App
