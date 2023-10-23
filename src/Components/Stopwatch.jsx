import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const timerRef = useRef(null);

  const handlePause = () => {
    setIsActive(false);
    document.getElementById('Reset').disabled= false;
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };


  const startTimer = () => {
    setIsActive(true);
    document.getElementById('Reset').disabled= true;
    timerRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  const timelist = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }

  useEffect(() => {
    if (seconds === 60 && minutes === 59) {
      setSeconds(0);
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
    else if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }

  }, [seconds, minutes]);

  // const minutes = Math.floor(time / 60000);
  // const seconds = Math.floor((time % 60000) / 1000);
  // const milliseconds = time % 1000;
  return (
    <>
      <h2>{timelist.hours + 'h : ' + timelist.minutes + 'm : ' + timelist.seconds + 's'}</h2>
      <button onClick={isActive ? handlePause : startTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button id='Reset' onClick={handleReset}>Reset</button>
    </>
  )
}

export default Stopwatch
