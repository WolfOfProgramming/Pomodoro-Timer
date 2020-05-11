import { useReducer } from 'react';
import { TimerSchema } from '../common/timerSchemaTypes';
import { DEFAULT_TIMER_SCHEMA } from '../common/constants';

const MINUTE_IN_SECONDS = 60;
const FIVE_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 5;
const TWENTY_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 20;

const INITIAL_STATE: State = {
  time: DEFAULT_TIMER_SCHEMA.timerDuration * MINUTE_IN_SECONDS,
  isActivated: false,
  timerSchema: DEFAULT_TIMER_SCHEMA,
};

enum ActionTypes {
  Start = 'start',
  Stop = 'stop',
  Reset = 'reset',
  DecreaseTime = 'decreaseTime',
  IncreaseTime = 'increaseTime',
  ChangeTimerSchema = 'changeTimerSchema',
}

type State = {
  time: number;
  isActivated: boolean;
  timerSchema: TimerSchema;
};

type IncreaseTime = {
  type: ActionTypes.IncreaseTime;
  timeAmount: number;
};

type DecreaseTime = {
  type: ActionTypes.DecreaseTime;
  timeAmount: number;
};

type EffectAction = {
  type:
    | ActionTypes.ChangeTimerSchema
    | ActionTypes.Reset
    | ActionTypes.Start
    | ActionTypes.Stop;
};

type Action = IncreaseTime | DecreaseTime | EffectAction;

function timerReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.Start:
      return { ...state, isActivated: true };
    case ActionTypes.Stop:
      return { ...state, isActivated: false };
    case ActionTypes.DecreaseTime:
      return { ...state, time: state.time - action.timeAmount };
    case ActionTypes.IncreaseTime:
      return { ...state, time: state.time + action.timeAmount };
    case ActionTypes.ChangeTimerSchema:
      // To Do
      return { ...state };
    case ActionTypes.Reset:
      return INITIAL_STATE;
  }
}

export function useTimerReducer() {
  const [state, dispatch] = useReducer(timerReducer, INITIAL_STATE);

  const start = () => dispatch({ type: ActionTypes.Start });
  const stop = () => dispatch({ type: ActionTypes.Stop });
  const reset = () => dispatch({ type: ActionTypes.Reset });
  const decreaseTime = () =>
    dispatch({ type: ActionTypes.DecreaseTime, timeAmount: 1 });

  const increaseTimeByOneMin = () =>
    dispatch({
      type: ActionTypes.IncreaseTime,
      timeAmount: MINUTE_IN_SECONDS,
    });

  const increaseTimeByFiveMin = () =>
    dispatch({
      type: ActionTypes.IncreaseTime,
      timeAmount: FIVE_MINUTES_IN_SECONDS,
    });

  const increaseTimeByTwentyMin = () =>
    dispatch({
      type: ActionTypes.IncreaseTime,
      timeAmount: TWENTY_MINUTES_IN_SECONDS,
    });

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
