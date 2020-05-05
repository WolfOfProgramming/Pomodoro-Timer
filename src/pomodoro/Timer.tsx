import React, { useEffect } from 'react';
import TimerDigits from './TimerDigits';
import { useTimerReducer } from './useTimerReducer';
import IncreaseTimeContainer from './IncreaseTimeContainer';
import Button from './Button';
import TimerControls from './TimerControls';

export default function Timer() {
  const {
    time,
    isActivated,
    timerSchema,
    start,
    stop,
    reset,
    decreaseTime,
    increaseTimeByOneMin,
    increaseTimeByFiveMin,
    increaseTimeByTwentyMin,
  } = useTimerReducer();

  useEffect(() => {
    if (isActivated) {
      const intervalID = setInterval(decreaseTime, 1000);
      return () => clearInterval(intervalID);
    }
  }, [isActivated]);

  return (
    <div>
      <TimerDigits time={time} />

      <IncreaseTimeContainer>
        <Button
          label='1'
          onClick={increaseTimeByOneMin}
          className='Button Button--type-square'
        />
        <Button
          label='5'
          onClick={increaseTimeByFiveMin}
          className='Button Button--type-square'
        />
        <Button
          label='20'
          onClick={increaseTimeByTwentyMin}
          className='Button Button--type-square'
        />
      </IncreaseTimeContainer>

      <TimerControls>
        <Button
          label='Change Time Schema'
          onClick={() => {}}
          className='Button Button--type-control'
        />
        <Button
          label={isActivated ? 'Stop' : 'Start'}
          onClick={isActivated ? stop : start}
          className='Button Button--type-control'
        />
        <Button
          label='Reset'
          onClick={reset}
          className='Button Button--type-control'
        />
      </TimerControls>
    </div>
  );
}
