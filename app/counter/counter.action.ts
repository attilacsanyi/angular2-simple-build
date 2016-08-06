import {BaseAction} from '../core/models';

// Counter Actions
const PREFIX = '[COUNTER]';

export class IncrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX} Increment`);
  }
}

export class DecrementCounterAction extends BaseAction {
  constructor(public amount: number) {
    super(`${PREFIX} Decrement`);
  }
}

export class ResetCounterAction extends BaseAction {
  constructor() {
    super(`${PREFIX} Reset`);
  }
}
