import React, { createContext, useState } from 'react';

export const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000);

  return (
    <WaterContext.Provider value={{ intake, setIntake, goal, setGoal }}>
      {children}
    </WaterContext.Provider>
  );
};
