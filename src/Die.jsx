import React from 'react'
import one from "./Images/1.png"


function Die(props) {
  const styles = {
    
    backgroundImage: props.isHeld ? `url(./src/Images/b${props.value}.png)` : `url(./src/Images/${props.value}.png)`
  }
 
  
  return (
    
  
      
     <div >
        <div className="number" style = {styles} onClick = {props.heldHandeler} >{props.value}</div>
    </div>

  )
}

export default Die
