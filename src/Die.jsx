import React from 'react'


function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    
  
      
     <div >
        <div className="number" style = {styles} onClick = {props.heldHandeler} >{props.value}</div>
    </div>

  )
}

export default Die
