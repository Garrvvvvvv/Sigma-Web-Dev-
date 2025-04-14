import React, { useState } from 'react'
import { useEffect } from 'react';

const Loggercomponent = () => {
    const[count,incrcount]=useState(0);
    function handlecountclick(){
        incrcount(count+1)
    }
    useEffect(() => {
        console.log("I will run every update in count")
    }, [count])
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handlecountclick}>
                Increase Count
            </button>

        </div>
    )
}

export default Loggercomponent
