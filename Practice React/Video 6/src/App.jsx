import { useState } from 'react'
import './App.css'
import ColourswitchBtn from './colourswitchBtn.jsx'

function App() {
  function getrandomcolour(){
    
    let r= 0+Math.round(255*Math.random())
    let g= 0+Math.round(255*Math.random())
    let b= 0+Math.round(255*Math.random())
    return `rgb(${r},${g},${b})`
    
  }
  const[colourcode,setcolourcode]=useState("rgb(255, 255, 255)")
  const[count , setcount]=useState(0);
  function inccount(){
    setcount(count+1)
  }
  // function alertfunction(){
  //   alert("I am clicked")
  // }
  var colorr=getrandomcolour();
  function handlechangecolour(){
    
    let bodystyle =document.getElementsByClassName("container")[0];
    // let btnbodystyle =document.getElementsByClassName("Btn")[0];
    bodystyle.style.backgroundColor=colorr;
    console.log({colorr})
  }
 
  function writecolourcode(){
    setcolourcode(colorr)
  }
  return (
    <div className='container' id='container' onClick={inccount}>
      <p >You clicked {count} times.</p>
      <ColourswitchBtn onchangecolour={handlechangecolour} setcolourcode={writecolourcode}/>

      <button className='Btn' onClick={(e)=>{
            e.stopPropagation();
            handlechangecolour();
            writecolourcode();
        }}>Change Colour</button>
        <p>Colour Code in Rgb is : {colourcode}</p>
      

    </div>
  )
}

export default App
