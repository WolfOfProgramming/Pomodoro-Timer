import { useReducer } from 'react';
import { TimerSchema } from '../common/timerSchemaTypes';
import { DEFAULT_TIMER_SCHEMA } from '../common/constants';

const MINUTE_IN_SECONDS = 60;
const FIVE_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 5;
const TWENTY_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 20;

const INITIAL_OBJECT: State = {
  time: DEFAULT_TIMER_SCHEMA.timerDuration * MINUTE_IN_SECONDS,
  isActivated: false,
  timerSchema: DEFAULT_TIMER_SCHEMA,
};

enum ActionTypes {
  Start = 'start',
  Stop = 'stop',
  Reset = 'reset',
  DecreaseTime = 'decreaseTime',
  IncreaseTimeByOneMin = 'increaseTimerByOneMin',
  IncreaseTimeByFiveMin = 'increaseTimerByFiveMin',
  IncreaseTimeByTwentyMin = 'increaseTimerByTwentyMin',
  ChangeTimerSchema = 'changeTimerSchema',
}

type State = {
  time: number;
  isActivated: boolean;
  timerSchema: TimerSchema;
};

type Action = {
  type: ActionTypes;
};

function timerReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.Start:
      return { ...state, isActivated: true };
    case ActionTypes.Stop:
      return { ...state, isActivated: false };
    case ActionTypes.Reset:
      return { ...state };
    case ActionTypes.DecreaseTime:
      return { ...state, time: state.time - 1 };
    case ActionTypes.IncreaseTimeByOneMin:
      return { ...state, time: state.time + MINUTE_IN_SECONDS };
    case ActionTypes.IncreaseTimeByFiveMin:
      return { ...state, time: state.time + FIVE_MINUTES_IN_SECONDS };
    case ActionTypes.IncreaseTimeByTwentyMin:
      return { ...state, time: state.time + TWENTY_MINUTES_IN_SECONDS };
    case ActionTypes.ChangeTimerSchema:
      return { ...state };
  }
}

export function useTimerReducer() {
  const [state, dispatch] = useReducer(timerReducer, INITIAL_OBJECT);

  const start = () => dispatch({ type: ActionTypes.Start });
  const stop = () => dispatch({ type: ActionTypes.Stop });
  const reset = () => dispatch({ type: ActionTypes.Reset });
  const decreaseTime = () => dispatch({ type: ActionTypes.DecreaseTime });

  const increaseTimeByOneMin = () =>
    dispatch({ type: ActionTypes.IncreaseTimeByOneMin });

  const increaseTimeByFiveMin = () =>
    dispatch({ type: ActionTypes.IncreaseTimeByFiveMin });

  const increaseTimeByTwentyMin = () =>
    dispatch({ type: ActionTypes.IncreaseTimeByTwentyMin });

  const { time, isActivated, timerSchema } = state;

  return {
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
  };
}
