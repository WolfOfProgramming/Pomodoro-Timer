import React from 'react';
import NumberInput from './NumberInput';
import { useTimerSchemaReducer } from './useTimerSchemaReducer';

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
      <input
        type='text'
        id='Set timer schema name'
        name='Set timer schema name'
        value={schemaName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSchemaName(e.target.value)
        }
      />
      <label htmlFor='Set timer schema name'>Set timer schema name</label>
      <NumberInput
        label='Set timer duration'
        value={timerDuration}
        onChange={setTimerDuration}
      />
      <NumberInput
        label='Set short break duration'
        value={shortBreakDuration}
        onChange={setShortBreakDuration}
      />
      <NumberInput
        label='Set long break duration'
        value={longBreakDuration}
        onChange={setLongBreakDuration}
      />
      <NumberInput
        label='Set elapsed timers to long break'
        value={elapsedTimersToLongBreak}
        onChange={setElapsedTimersToLongBreak}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
