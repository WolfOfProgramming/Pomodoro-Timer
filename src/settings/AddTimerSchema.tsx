import React from 'react';
import NumberInput from './NumberInput';
import { useTimerSchemaReducer } from './useTimerSchemaReducer';
import Input from './Input';

export default function AddTimerSchema() {
  const {
    schemaName,
    setSchemaName,
    timerDuration,
    setTimerDuration,
    shortBreakDuration,
    setShortBreakDuration,
    longBreakDuration,
    setLongBreakDuration,
    elapsedTimersToLongBreak,
    setElapsedTimersToLongBreak,
    resetValuesToDefault,
  } = useTimerSchemaReducer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Add to local Storage and reset
    e.preventDefault();

    resetValuesToDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Timer Option</h3>
      <Input
        label='Set timer schema name'
        value={schemaName}
        onChange={setSchemaName}
      />
      <NumberInput
        label='Set timer duration'
        value={timerDuration}
        min={1}
        onChange={setTimerDuration}
      />
      <NumberInput
        label='Set short break duration'
        value={shortBreakDuration}
        min={1}
        onChange={setShortBreakDuration}
      />
      <NumberInput
        label='Set long break duration'
        value={longBreakDuration}
        min={1}
        onChange={setLongBreakDuration}
      />
      <NumberInput
        label='Set elapsed timers to long break'
        value={elapsedTimersToLongBreak}
        min={1}
        onChange={setElapsedTimersToLongBreak}
      />
    </form>
  );
}
