import React, { useEffect, useRef, useState } from 'react'
import './Stopwatch.scss';

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const timerRef = useRef(null);

  const handleStop = () => {
    setIsActive(false);
    document.getElementById('Reset').disabled = false;
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    setShowButton(false);
    clearInterval(timerRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    const list = document.getElementById("ul");
    while (list.hasChildNodes())
      list.removeChild(list.firstChild);
  };

  const handleLap = async () => {
    var li = await document.createElement('li');
    li.textContent = `${timelist.hours + 'h : ' + timelist.minutes + 'm : ' + timelist.seconds + 's'}`;
    var ul = await document.getElementById('ul');
    console.log(ul);
    ul.appendChild(li);
  };

  const startTimer = () => {
    setIsActive(true);
    setShowButton(true);
    document.getElementById('Reset').disabled = true;
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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="info">

            <ul className="countdown">
              <li>
                <span className="hours">{timelist.hours}</span>
                <h4>Hours</h4>
              </li>
              <li>
                <span className="minutes">{timelist.minutes}</span>
                <h4>Minutes</h4>
              </li>
              <li>
                <span className="seconds">{timelist.seconds}</span>
                <h4>Seconds</h4>
              </li>
            </ul>
            <div className="row2">
              <button onClick={isActive ? handleStop : startTimer}>
                {isActive ? 'Stop' : 'Start'}
              </button>
              <button id='Reset' onClick={handleReset}>Reset</button>
              {showButton && <button onClick={handleLap}>Lap</button>}
            </div>
          </div>
        </div>
      </div>
      {showButton && <h3>Laps</h3>}
      <div className="lap-container">

        <ul id='ul'>

        </ul>
      </div>
    </>
  )
}

export default Stopwatch
