import React from 'react';
import TimerDigits from './TimerDigits';
import { useTimerReducer } from './useTimerReducer';
import Button, { ButtonClasses } from './Button';
import { useInterval } from './useInterval';

export default function Timer() {
  const {
    time,
    isActivated,
    start,
    stop,
    reset,
    decreaseTime,
    increaseTimeByOneMin,
    increaseTimeByFiveMin,
    increaseTimeByTwentyMin,
  } = useTimerReducer();

  useInterval(decreaseTime, isActivated ? 1000 : null);

  return (
    <div>
      <TimerDigits time={time} />

      <div className='time-prolongers-wrapper'>
        <Button
          label='Add 1 minute'
          onClick={increaseTimeByOneMin}
          className={ButtonClasses.BtnSquare}
        />
        <Button
          label='Add 5 minutes'
          onClick={increaseTimeByFiveMin}
          className={ButtonClasses.BtnSquare}
        />
        <Button
          label='Add 20 minutes'
          onClick={increaseTimeByTwentyMin}
          className={ButtonClasses.BtnSquare}
        />
      </div>

      <div className='time-control-wrapper'>
        <Button
          label='Choose time schema'
          onClick={() => {}}
          className={ButtonClasses.BtnControl}
        />
        <Button
          label={isActivated ? 'Stop' : 'Start'}
          onClick={isActivated ? stop : start}
          className={ButtonClasses.BtnControl}
        />
        <Button
          label='Reset'
          onClick={reset}
          className={ButtonClasses.BtnControl}
        />
      </div>
    </div>
  );
}
