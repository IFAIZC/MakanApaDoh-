import './MultiStageForm.css';

export default function MultiStageForm(){
  return (
    <div>
      <h1>Makan Apa Doh!?</h1>
      <h3>Select one option:</h3>
      <div className="cuisine-button-container">
        <button>MALAY</button>
        <button>INDIAN</button>
        <button>CHINESE</button>
        <button>THAI</button>
        <button>WESTERN</button>
      </div>
      <div className="next-button-container">
        <button className='next-button'>NEXT</button>
      </div>
    </div>
  )
}
