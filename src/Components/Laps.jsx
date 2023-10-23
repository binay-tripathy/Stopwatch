import React, { useState } from 'react'

const Laps = () => {
  const [laps, setLaps] = useState([]);


  const handleAddLap = () => {
      setLaps([...laps, lapText]);
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