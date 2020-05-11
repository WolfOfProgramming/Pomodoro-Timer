import React, { useState } from 'react';
import Toggle from './Toggle';
import AddTimerSchema from './AddTimerSchema';

export default function Settings() {
  const [isAutoStartTimer, setIsAutoStartTimer] = useState(false);
  const [isAutoStartBreak, setIsAutoStartBreak] = useState(false);

  const toggleIsAutoStartTimer = () =>
    setIsAutoStartTimer((prevState) => !prevState);

  const toggleIsAutoStartBreak = () =>
    setIsAutoStartBreak((prevState) => !prevState);

  return (
    <div>
      <h2>Settings</h2>
      <Toggle
        label='Auto start timer'
        isChecked={isAutoStartTimer}
        onClick={toggleIsAutoStartTimer}
      />
      <Toggle
        label='Auto start breaks'
        isChecked={isAutoStartBreak}
        onClick={toggleIsAutoStartBreak}
      />
      <AddTimerSchema />
    </div>
  );
}
