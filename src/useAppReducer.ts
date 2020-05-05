import { TimerSchema } from './common/timerSchemaTypes';

enum ActionTypes {
  AddTimerSchema = 'addTimerSchema',
  DeleteTimerSchema = 'deleteTimerSchema',
  SetTimerSchemaIndex = 'setUsedSchema',
  ToggleTimerAutoStart = 'toggleTimerAutoStart',
  ToggleBreakAutoStart = 'toggleBreakAutoStart',
}

type AddTimerSchema = {
  type: ActionTypes.AddTimerSchema;
  schema: TimerSchema;
};

type DeleteTimerSchema = {
  type: ActionTypes.DeleteTimerSchema;
  index: number;
};

type SetTimerSchemaIndex = {
  type: ActionTypes.SetTimerSchemaIndex;
  index: number;
};

type ToggleTimerAutoStart = {
  type: ActionTypes.ToggleTimerAutoStart;
};

type ToggleBreakAutoStart = {
  type: ActionTypes.ToggleBreakAutoStart;
};

type Action =
  | AddTimerSchema
  | DeleteTimerSchema
  | SetTimerSchemaIndex
  | ToggleBreakAutoStart
  | ToggleTimerAutoStart;

type State = {
  timerSchemaIndex: number;
  timerSchemas: TimerSchema[];
  isTimerAutoStart: boolean;
  isBreakAutoStart: boolean;
};
