import { useState , useEffect } from 'react'
import Die from './Die'
import './App.css'
import "./mainSection.css"
import { nanoid } from 'nanoid'


function App() {

  const [newDices,setNewDicess] = useState(allNewDice())
  const [tenzzies,setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = newDices.every(dice => dice.isHeld)
    const firstValue = newDices[0].value
    const allSameValue = newDices.every(dice => dice.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [newDices])

  function generatedNumber(){
    let randomNumber = Math.floor(Math.random() * 6)
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
      <Die value = {dice.value} key = {dice.id} isHeld = {dice.isHeld} heldHandeler = {() => heldHandeler(dice.id)}/>
    )
  })

  function rollDice(){

    setNewDicess(olddice=> olddice.map(dice => {
      return dice.isHeld ? dice : dice = generatedNumber()
     }))
  }


  return (
    <div className="App">
      <h3>Tenzies</h3>
      <p className='howToPlay'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="numbersWrapper">
       {dieceElements}
      </div>


    <button className='roll' onClick= {rollDice} >Roll</button>
    </div>
  )
}

export default App
