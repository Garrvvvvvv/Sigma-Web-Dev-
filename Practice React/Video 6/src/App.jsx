import { useState } from 'react'
import './App.css'
import ColourswitchBtn from './colourswitchBtn.jsx'

function App() {
  function getrandomcolour(){
    
    let r= 150+Math.round(100*Math.random())
    let g= 150+Math.round(100*Math.random())
    let b= 150+Math.round(100*Math.random())
    return `rgb(${r},${g},${b})`
    
  }
  const[colourcode,setcolourcode]=useState("rgb(0,0,0)")
  const[count , setcount]=useState(0);
  function inccount(){
    setcount(count+1)
  }
  // function alertfunction(){
  //   alert("I am clicked")
  // }
  function handlechangecolour(){
    
    console.log(getrandomcolour())
    let bodystyle =document.getElementsByClassName("container")[0];
    bodystyle.style.backgroundColor=getrandomcolour();
  }

  function writecolourcode(){
    setcolourcode(getrandomcolour())
  }
  return (
    <div className='container' id='container' onClick={inccount}>
      <p >You clicked {count} times.</p>
      <ColourswitchBtn onchangecolour={handlechangecolour} setcolourcode={writecolourcode}/>

      <button onClick={(e)=>{
            e.stopPropagation();
            handlechangecolour();
            writecolourcode();
        }}>Change Colour</button>
        <p>Colour Code in Rgb is : {colourcode}</p>
      

    </div>
  )
}

export default App
