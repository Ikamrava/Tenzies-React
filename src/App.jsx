import { useState , useEffect } from 'react'
import Die from './Die'
import './App.css'
import "./mainSection.css"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {
 let text = "Roll"
  const [newDices,setNewDicess] = useState(allNewDice())
  const [tenzies,setTenzies] = useState(false)
  const [score,setScore]= useState(1)

  useEffect(() => {
    const allHeld = newDices.every(dice => dice.isHeld)
    const firstValue = newDices[0].value
    const allSameValue = newDices.every(dice => dice.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        text = "New Game" 
    }
}, [newDices])

  function generatedNumber(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return {
      id:nanoid(),
      value: randomNumber,
      isHeld:false
    }


  }
  function allNewDice(){
    let diceList = []
    
    for(let i = 0;i<10;i++){
      diceList.push(generatedNumber())
    }
    return diceList

  }

  

  function heldHandeler(id){
    setNewDicess(olddice=> olddice.map(dice => {
      return dice.id === id ? {...dice, isHeld : !dice.isHeld} : dice
     }))

  }



    
  const dieceElements = newDices.map(dice => {
    
    return(
      <Die  value = {dice.value} key = {dice.id} isHeld = {dice.isHeld} heldHandeler = {() => heldHandeler(dice.id)}/>
    )
  })

  function rollDice() {
    if(!tenzies) {
      
        setNewDicess(oldDice => oldDice.map(dice => {
          
            return dice.isHeld ? 
                dice :
                generatedNumber()
                

        }))
    } else {
        setScore(0)
        setTenzies(false)
        setNewDicess(allNewDice())
        
    }
    setScore(prev => prev + 1)
}




  return (
    <div className="App">
      {tenzies && <Confetti className = "confetti"/>}
      <h3>{tenzies ? "You Won!" : "Tenzies"}</h3>
      <p className='howToPlay'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="numbersWrapper">
       {dieceElements}
      </div>


    <button className='roll' onClick= {rollDice} >{tenzies ? "New Game" : "Roll"}</button>
    <label >Score: {score}</label>
    </div>
  )
}

export default App
