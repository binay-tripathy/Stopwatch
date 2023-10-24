import React, { useEffect, useState } from 'react'

const Laps = (props) => {
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    setLaps([...laps, props.timelist.hours, props.timelist.minutes, props.timelist.seconds]);
    console.log(laps.map((lap, index) => (index + '' + lap)));
  }, [props.timelist])
  
  const handleAddLap = () => {
          // if (taskText.trim() !== '') {
          //   setTaskText('');
          // }
        };

  const handleDeleteLap = (index) => {
          // const newLaps = laps.slice();
          // newLaps.splice(index, 1);
          // setLaps(newLaps);
          setLaps([]);
  };

        return (
        <div>
          <ul>
            <h4>Laps</h4>
            {laps.map((lap, index) => (
              <li key={index}> {lap}</li>
            ))}
          </ul>
        </div>
        )
}

        export default Laps