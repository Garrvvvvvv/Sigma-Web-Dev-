import { useState } from 'react';
import './App.css'
import { useEffect } from 'react'
import Loggercomponent from '../components/Loggercomponent.jsx';
import TimerComponent from '../components/TimerComponent.jsx';
function App() {
  // const[count , incrcount]=useState(0);
  // const[total , incrtotal]=useState(0);

  // function counthandleClick(){
  //   incrcount(count+1)
  // }
  // function totalhandleClick(){
  //   incrtotal(total+1)
  // }


// variation 1 : This will run on each update in UI

      // useEffect(() => {
      //   alert("I will run on each render")
      // })

// variation 2 : This will run on 1st update in UI

      // useEffect(() => {
      //   alert("I will run on 1st update")
      // },[])

// variation 3 : This will run on each update in selected component in UI

      // useEffect(() => {
      //   alert("I will run on each render")
      // },[count])

// variation 4 : Multiple Dependencies

      // useEffect(() => {
      //   alert("I will run on update in count and total")
      // },[count , total])

// variation 5 :Now adding cleanup function : means (jab element UI se unmount krege to vo run hoga)
                // jab run krega to tujhe yeh dikhega ki update krne per bhi return function run ho rha hota h kyuki purani value hat ti h aur nyi aati h ek trah se unmount hi hoyi value and nyi aayi 


      // useEffect(() => {
      //   alert("I will run on update in count")

      //   return()=>{
      //     console.log("Counter is Unmounted fromn UI")
      //   }

      // },[count])





  return (
    <div>
      {/* <h2>Count : {count}</h2>
      <button onClick={counthandleClick}>
        Increase Count 
      </button> 
      <h2>Total : {total}</h2>
      <button onClick={totalhandleClick}>
        Increase Total
      </button>  */}

      {/* <Loggercomponent/> */}

      <TimerComponent /> 

    </div>
  ) 
}

export default App
