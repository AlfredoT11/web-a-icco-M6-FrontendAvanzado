import { useRef, useState } from "react";

let ChronometerComponent = () => {

    const [startTime, setStartTime] = useState(null);
    const [currentMoment, setCurrentMoment] = useState(null);
    const intervalIdRef = useRef(null);

    let handleStart = () => {
        setStartTime(Date.now());
        setCurrentMoment(Date.now());

        // Esta función sirve para detener un intervalo.
        // Recibe como parámetro el id del intervalo a detener.
        clearInterval(intervalIdRef.current); 

        // setInterval() genera un intervalo que se ejecuta de manera infinita cada n milisegundos.
        // Regresa como valor el id del intervalo creado.
        intervalIdRef.current = setInterval(() => {
            setCurrentMoment(Date.now());
        }, 1000);
    }

    let handleStop = () => {
        clearInterval(intervalIdRef.current); 
    }

    let timePassed = 0;
    if(startTime != null && currentMoment != null){
        timePassed = (currentMoment - startTime) / 1000;
    }


    return (
        <>
            <h2>Time: {timePassed}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default ChronometerComponent;