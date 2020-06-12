import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, exhaustMap } from 'rxjs/operators';

import {
    AuthActionTypes,
    LoggedIn, LoggedUser,
    LoggedUserError,
    LoginUser, LogoutAuth
} from '../Actions/auth.action';

import { AuthService } from '../Services/auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthEffects {

    constructor(private http: HttpClient, private actions$: Actions, private authService: AuthService) { }

    @Effect()
    LoggedUserError$: Observable<Action> = this.actions$.pipe(
        ofType<LoggedUserError>(AuthActionTypes.LoggedUserError),
        tap(v => console.log('LoggedAPI error', v.payload)),
        map(data => {
            return { type: 'LOGGIN_API_ERROR', payload: 'Email or password inconrrect' }
        })
    );

    @Effect()
    LoginUser$: Observable<Action> = this.actions$.pipe(
        ofType<LoginUser>(AuthActionTypes.LoginUser),
        tap(v => console.log('LoginUser effect', v)),
        map(action => action.payload),
        exhaustMap(auth => {
            return this.authService.login(auth)
                .pipe(
                    map(response => new LoggedUser(response)),
                    catchError(error => of(new LoggedUserError(error)))
                )
        })
    );

    @Effect()
    LoggedUser$: Observable<Action> = this.actions$.pipe(
        ofType<LoggedUser>(AuthActionTypes.LoggedUser),
        tap(v => console.log('loggedUser payload', v.payload)),
        map(data => {
            console.log(data);
            return { type: '', payload: data }
        })
    );
}