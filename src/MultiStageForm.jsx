import './MultiStageForm.css';
import { useState } from 'react';
import { CUISINES } from './CUISINES.js';


export default function MultiStageForm(){

  // to move between stage 1 and stage 2 and back
  const [stage, setStage] = useState(1);

  // to select cusines button and update the state
  const [selectButton, setSelectButton] = useState("")

  // to find, random the selected cuisine.
  const [randomDish, setRandomDish] = useState("");


  function nextStage() {
    pickRandomDish();
    setStage(2)
  }

  function backStage() {
    setStage(1)
  }

  function selectCuisine(cuisine) {
    setSelectButton(cuisine)
  }

  function pickRandomDish() {
    const cuisine = CUISINES.find(c => c.name === selectButton);
    if (cuisine) {
      const randomIndex = Math.floor(Math.random() * cuisine.foods.length);
      setRandomDish(cuisine.foods[randomIndex]);
    }
  }


  return (
    <div>
      {stage === 1 && (
      <div>
        <h1>Makan Apa Doh!?</h1>
        <h3>Select one option:</h3>
        <div className="cuisine-button-container">
          <button onClick={() => selectCuisine("MALAY")}>MALAY</button>
          <button onClick={() => selectCuisine("INDIAN")}>INDIAN</button>
          <button onClick={() => selectCuisine("CHINESE")}>CHINESE</button>
          <button onClick={() => selectCuisine("THAI")}>THAI</button>
          <button onClick={() => selectCuisine("WESTERN")}>WESTERN</button>
        </div>
        <div className="next-button-container">
          <button className='next-button' onClick={nextStage} disabled={!selectButton}>NEXT</button>
        </div>
      </div>
      )}

      {stage === 2 && (
      <div>
        <h1>{randomDish}</h1>
        <button onClick={backStage}>Main Menu</button>
      </div>
      )}
    </div>
  )
}