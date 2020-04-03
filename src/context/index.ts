import { createContext } from 'react'
import { History, LocationState } from 'history'
import { Action } from '../actions'

export interface ContextState {
    history?: History<LocationState>;
}

export interface Context {
    state: ContextState;
    dispatch: (action: Action) => void;
}

export const  initialState: ContextState = {}

const context = createContext<Context>({
    state: initialState,
    dispatch: (action: Action) => {},
})

export default context;