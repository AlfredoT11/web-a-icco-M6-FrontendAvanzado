import './App.css'
import CounterComponent from './components/CounterComponent'
import ChronometerComponent from './components/ChronometerComponent';
import { useRef, useState, useEffect } from 'react';

function App() {

  // Utilizamos el hook useRef para crear una variable de referencia.
  let counterRef = useRef(0); // <- useRef() regresa un objecto con un solo atributo.

  let [counterState, setCounterState] = useState(0);

  // useEffect() se manda a llamar cada vez que el componente se actualiza.
  useEffect(() => {
    console.log('The component has been updated');
  }, [counterState]);

  const handleClick = () => {
    if(counterRef.current % 2 == 0){
      setCounterState(counterState + 1);
    }
    counterRef.current = counterRef.current + 1;
    alert(`The value of the counterRef variable is: ${counterRef.current}`);
  }

  return (
    <>
      <h1>Hooks avanzados</h1>
      <CounterComponent clickFunction={handleClick}/>
      <ChronometerComponent /> 
      <ChronometerComponent /> 
      <ChronometerComponent /> 

    </>
  )
}

export default App
