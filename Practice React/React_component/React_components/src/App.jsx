import './App.css'
import Usercard from "./Components/Usercard"
import max from './assets/max.jpg'
import virat from './assets/virat.jpg'
import faf from './assets/faf.jpg'
import rajat from "./assets/rajat.jpg"
function App() {
  return (
    
      <div className='conatiner'>
        <Usercard name="Glen Maxwell" desc="Desc 1" img={max}/>
        <Usercard name="Virat" desc="Desc 2" img={virat}/>
        <Usercard name="Faf Du Plessis" desc="Desc 3" img={faf}/>
        <Usercard name="Rajat Patidar" desc="Desc 4" img={rajat}/>
        <Usercard name="UnderDog" desc="Desc 5" img=""/>
      </div>  
        
  )
}

export default App
