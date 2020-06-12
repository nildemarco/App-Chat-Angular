import * as AuthActions from '../Actions/auth.action';
import { AuthActionTypes } from '../Actions/auth.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface State {
    user: Array<any>;
    token: Array<any>;
    error: string;
    isLoading: Boolean;
};

const intialState: State = {
    user: [],
    token: [],
    error: '',
    isLoading: false,
};

export function AuthReducer(state = [], action: AuthActions.actions) {
    switch(action.type) {
        case AuthActionTypes.LoginUser: 
             return (action)
             break;
        case AuthActionTypes.LoggedUser:
            return {
                ...state,
                isLoading: false,
                token:  action.payload
            }
            break;
        default: 
            return state;
    }
}

export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;