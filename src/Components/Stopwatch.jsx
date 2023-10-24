import React, { useEffect, useRef, useState } from 'react'
import './Stopwatch.scss';
// import Laps from './Laps';

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const timerRef = useRef(null);

  const handleStop = () => {
    setIsActive(false);
    document.getElementById('Reset').disabled = false;
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleLap = () => {
    let up = document.getElementById('ul');
    console.log(up);
    let li = document.createElement('li');
    li.textContent = `${timelist.hours + 'h : ' + timelist.minutes + 'm : ' + timelist.seconds + 's'}`;
    up.appendChild(li);

    // console.log(menu.innerHTML);
  };

  const startTimer = () => {
    setIsActive(true);
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

  // const minutes = Math.floor(time / 60000);
  // const seconds = Math.floor((time % 60000) / 1000);
  // const milliseconds = time % 1000;
  return (
    <>
      {/* <h2>{timelist.hours + 'h : ' + timelist.minutes + 'm : ' + timelist.seconds + 's'}</h2> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="info">

              <ul className="countdown">
                <li>
                  <span className="hours">{timelist.hours}</span>
                  <h3>Hours</h3>
                </li>
                <li>
                  <span className="minutes">{timelist.minutes}</span>
                  <h3>Minutes</h3>
                </li>
                <li>
                  <span className="seconds">{timelist.seconds}</span>
                  <h3>Seconds</h3>
                </li>
              </ul>
              <div className="row">
                <button onClick={isActive ? handleStop : startTimer}>
                  {isActive ? 'Stop' : 'Start'}
                </button>
              </div>
              <div className="row">
                <button id='Reset' onClick={handleReset}>Reset</button>
              </div>
              <div className="row">
                <button id='Lap' onClick={handleLap(timelist)}>Lap</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Laps timelist={timelist}/> */}
      </div>
      <div className="lap-container">
        <ul id='ul'>

        </ul>
      </div>
    </>
  )
}

export default Stopwatch
