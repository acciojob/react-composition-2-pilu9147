
import React, { useState } from "react";
import './../styles/App.css';
import Modal from './Modal'
const App = () => {

    const [showstate, upshowstate] = useState(false)
    const changestate = ()=>{
       upshowstate(false)
    }
  return (
    <div>
        <button onClick={()=>upshowstate(true)}>Show Modal</button>
        <Modal show = {showstate} handleclick = {changestate}/>
    </div>
  )
}

export default App
