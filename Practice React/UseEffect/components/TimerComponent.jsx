import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const TimerComponent = () => {
    const[Seconds, incrcount]=useState(0);
    useEffect(() => {
        const intervalId=setInterval(()=>{
            incrcount(prevSeconds =>prevSeconds+1);
        },1000);

        return()=>{
            clearInterval(intervalId);
        }; 
    
    }, [])
  return (
    <div>
        <h1>Seconds : {Seconds}</h1>

      
    </div>
  )
}

export default TimerComponent
