import { useReducer } from 'react';
import { TimerSchema } from '../common/timerSchemaTypes';
import { DEFAULT_TIMER_SCHEMA } from '../common/constants';
import { ActionTypes, Action } from './timerSchemaActions';

function timerSchemaReducer(state: TimerSchema, action: Action): TimerSchema {
  switch (action.type) {
    case ActionTypes.SetTimerDuration:
      return { ...state, timerDuration: action.duration };
    case ActionTypes.SetShortBreakDuration:
      return { ...state, shortBreakDuration: action.duration };
    case ActionTypes.SetLongBreakDuration:
      return { ...state, longBreakDuration: action.duration };
    case ActionTypes.SetElapsedTimersToLongBreak:
      return { ...state, elapsedTimersToLongBreak: action.elapsedTimers };
    case ActionTypes.SetSchemaName:
      return { ...state, schemaName: action.name };
    case ActionTypes.ResetValuesToDefault:
      return DEFAULT_TIMER_SCHEMA;
  }
}

export function useTimerSchemaReducer() {
  const [state, dispatch] = useReducer(
    timerSchemaReducer,
    DEFAULT_TIMER_SCHEMA
  );

  const setTimerDuration = (duration: number) =>
    dispatch({ type: ActionTypes.SetTimerDuration, duration });

  const setShortBreakDuration = (duration: number) =>
    dispatch({ type: ActionTypes.SetShortBreakDuration, duration });

  const setLongBreakDuration = (duration: number) =>
    dispatch({ type: ActionTypes.SetLongBreakDuration, duration });

  const setElapsedTimersToLongBreak = (elapsedTimers: number) =>
    dispatch({ type: ActionTypes.SetElapsedTimersToLongBreak, elapsedTimers });

  const setSchemaName = (name: string) =>
    dispatch({ type: ActionTypes.SetSchemaName, name });

  const resetValuesToDefault = () =>
    dispatch({ type: ActionTypes.ResetValuesToDefault });

  const {
    schemaName,
    timerDuration,
    shortBreakDuration,
    longBreakDuration,
    elapsedTimersToLongBreak,
  } = state;

  return {
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
  };
}
