import React, { useState, useContext } from 'react';
import { WaterContext } from '../Context/WaterContext';
import './Track.css';

function Track() {
  const [list, setList] = useState([]);
  const {intake, setIntake, goal } = useContext(WaterContext);

  const add = (ml) => {
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setList([{ id: Date.now(), ml, time }, ...list]);
    setIntake((prev) => Math.min(prev + ml, goal));
  };

  return (
    <div>
      <h1>Track Intake</h1>
      <p>Log your water</p>
      <div className="buttons">
        <button onClick={() => add(150)}>Small Glass<br /><span>150 ml</span></button>
        <button onClick={() => add(250)}>Regular Glass<br /><span>250 ml</span></button>
        <button onClick={() => add(350)}>Large Glass<br /><span>350 ml</span></button>
        <button onClick={() => add(500)}>Bottle<br /><span>500 ml</span></button>
        <button onClick={() => add(750)}>Big Bottle<br /><span>750 ml</span></button>
        <button className="full">Custom Amount</button>
      </div>
      <h2>Entries</h2>
      {list.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.ml} ml at {item.time}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Track;

