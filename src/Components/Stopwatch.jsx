import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  
  const timerRef = useRef(null);
  
  // const tick = () =>{
    // setTimer((timer) => timer + 1);
  // }
  
  // useEffect(() => {
  //   show();
  // }, [timer])
  

  const startTimer = () => {
    setIsActive(true);
    timerRef.current = setInterval(() => {
      // if (seconds < 10)
        // setSeconds((seconds) => seconds + 1);
      // else if (seconds >= 10) {
        //   setMinutes((minutes) => minutes + 1);
        //   setSeconds(0);
        // }
        // console.log(timerRef)
        // tick();
    setTimer((timer) => timer + 1);

      }, 1000);
    }
    
    const handlePause = () => {
      setIsActive(false);
      clearInterval(timerRef.current);
    };
    const handleStop = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    setTimer(0);
    setMinutes(0);
    setHours(0);
  };
  const handleReset = () => {
    setTimer(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
    clearInterval(timerRef.current);
    console.log(timer);
  };
  
  const show = () => {
    if(timer % 10 === 0 && minutes === 3){
      setTimer(0);
      setMinutes(0);
      setHours(Math.floor(timer / 100));
      // setHours((hours) => hours + 1);
    }
    else if(timer % 10 === 0){
      setTimer(0);
      setMinutes(Math.floor((timer % 100)/10));
      // setMinutes((minutes) => minutes + 1)
    }
  }
  const timelist = {
    hours: hours,
    minutes: minutes,
    seconds: timer % 10,
  }
  
  useEffect(() => {
    show();
    console.log(timerRef); 
  }, [show, timerRef]);
  
  
  return (
    <>
      <h2>{timelist.hours + 'h : ' + timelist.minutes + 'm : ' + timelist.seconds + 's'}</h2>
      <button onClick={isActive ? handlePause : startTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Stopwatch
