import { History, LocationState } from 'history';

export const ADD_HISTORY = 'ADD_HISTORY';
export const UPDATE_HISTORY = 'UPDATE_HISTORY';

interface HistoryPayload {
  history: History<LocationState>;
}

export interface AddHistoryAction {
  type: typeof ADD_HISTORY;
  payload: HistoryPayload;
}



export function addHistory(payload: HistoryPayload): AddHistoryAction {
  return {
    type: ADD_HISTORY,
    payload,
  };
}

