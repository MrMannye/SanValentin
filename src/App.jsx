import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState(false);
  const [position, setPosition] = useState({position: "", x: 0, y: 0 });
  const arrayGifts = [
    'mocha.gif',
    'mocha2.gif',
    'mocha4.gif',
    'mocha5.gif',
    'mocha6.gif',
  ];
  const toggleYes = () => {
    setAnswer(true);
    setCount(4);
  }
  const toggleNo = () => {
    setPosition({position: "absolute", x: Math.floor(Math.random() * 70) + "%", y: Math.floor(Math.random() * 70) + "%"});
  }

  return (
    <div className='container'>
      <div className='container-gift'>
        <img src={arrayGifts[count]} alt="Ositos Iniciales" />
      </div>
      {answer ? <h1>¡Gracias por aceptar!</h1>
        :
        <>
          <h1>¿Quieres ser mi San Valentín?</h1>
          <div className='container-question'>
            <button onClick={toggleYes}>Si</button>
            <button style={{position:position.position, right:position.x, top:position.y}} onClick={toggleNo}>No</button>
          </div>
        </>
      }

    </div>
  )
}

export default App
