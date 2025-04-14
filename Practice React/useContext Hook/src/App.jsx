import { createContext } from 'react'
import './App.css'
import ChildA from './components/childA.jsx';
import { useState } from 'react';
const UserContext = createContext();


function App() {
  const[user,setUser]=useState({name:"love"});


  return (
    <div>
      <UserContext.Provider value={user} >
        <ChildA/>
      </UserContext.Provider>

    </div>
  )
}

export default App
export {UserContext}
