import React, {useRef, useState } from 'react'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);


    const timerRef = useRef(null);


    const startTimer = ()=>{
        setIsActive(true);
        timerRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    }

    const handlePause = ()=>{
        setIsActive(false);
        clearInterval(timerRef.current);
    };
    const handleStop = ()=>{
        setIsActive(false);
        clearInterval(timerRef.current);
        setTimer(0);
    };
    
  return (
    <>
        <h2>{timer}</h2>
        {/* <button onClick={startTimer}>Start</button> */}
        <button onClick={isActive ? handlePause : startTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={()=>{setTimer(0); console.log(timer);}}>Reset</button>
    </>
  )
}

export default Stopwatch
