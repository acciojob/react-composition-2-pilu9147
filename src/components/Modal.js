import React from 'react'

const Modal = (props) => {
  if(!props.show) {
       return null
  }
  return (
    <>
       <div className='model-overlay' style={{backgroundColor:'skyblue', height:'100px' , width:"200px"}}>
        <button className='model-close' onClick={props.handleclick}>Close</button>
        <p>This is the content of the modal.</p>
       </div>
    </>
  
  )
}

export default Modal

