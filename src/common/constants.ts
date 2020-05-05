import { TimerSchema } from './timerSchemaTypes';

export const DEFAULT_TIMER_SCHEMA: TimerSchema = {
  schemaName: 'Default',
  timerDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  elapsedTimersToLongBreak: 4,
};
