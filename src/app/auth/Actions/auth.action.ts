import { Action } from '@ngrx/store';
import { IUser } from 'src/app/Interfaces/IUser';

export enum AuthActionTypes {
    LoggedUser = '[Auth] LOGED_USER',
    LoginUser = '[Auth] LOGIN_USER',
    LoggedUserError = '[Auth] LOGED_USER_ERROR',
    LoggedIn = '[Auth] LOGGED_IN',
    LogoutAuth = '[Auth] LOGOUT_USER'
}

export class LoggedIn implements Action {
    readonly type = AuthActionTypes.LoggedIn;
    constructor(public payload: { isLogin: Boolean }) { }
}

export class LogoutAuth implements Action {
    readonly type = AuthActionTypes.LogoutAuth;
    constructor(public payload: { isLogin: Boolean }) { }
}
export class LoggedUser implements Action {
    readonly type = AuthActionTypes.LoggedUser;
    constructor(public payload: any) { }
}
export class LoginUser implements Action {
    readonly type = AuthActionTypes.LoginUser;
    constructor(public payload: { user: IUser }) { }
}

export class LoggedUserError implements Action {
    readonly type = AuthActionTypes.LoggedUserError;
    constructor(public payload: { error: string }) { }
}

export type actions =
    LoggedIn
    | LoggedUser
    | LoginUser
    | LogoutAuth
    | LoggedUserError;