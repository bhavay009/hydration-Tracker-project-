import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000);
  const progress = Math.min((intake / goal) * 100, 100).toFixed(0);

  return (
    <div className="app">
      <h1>Hydro Daily</h1>
      <p>Track your daily hydration</p>

      <div className="box">
        <div className="row">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="row">
          <span>0 ml</span>
          <span>{goal} ml</span>
        </div>
      </div>
    </div>
  );
};

export default Home;