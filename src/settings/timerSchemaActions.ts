export enum ActionTypes {
  SetSchemaName = 'setSchemaName',
  SetTimerDuration = 'setTimerDuration',
  SetShortBreakDuration = 'setShortBreakDuration',
  SetLongBreakDuration = 'setLongBreakDuration',
  SetElapsedTimersToLongBreak = 'setElapsedTimersToLongBreak',
  ResetValuesToDefault = 'resetValuesToDefault',
}

type SetTimerDuration = {
  type: ActionTypes.SetTimerDuration;
  duration: number;
};

type SetShortBreakDuration = {
  type: ActionTypes.SetShortBreakDuration;
  duration: number;
};

type SetLongBreakDuration = {
  type: ActionTypes.SetLongBreakDuration;
  duration: number;
};

type SetElapsedTimersToLongBreak = {
  type: ActionTypes.SetElapsedTimersToLongBreak;
  elapsedTimers: number;
};

type ResetValuesToDefault = {
  type: ActionTypes.ResetValuesToDefault;
};

type SetSchemaName = {
  type: ActionTypes.SetSchemaName;
  name: string;
};

export type Action =
  | SetTimerDuration
  | SetShortBreakDuration
  | SetLongBreakDuration
  | SetElapsedTimersToLongBreak
  | ResetValuesToDefault
  | SetSchemaName;
