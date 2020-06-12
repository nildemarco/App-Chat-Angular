import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IUser } from '../../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //Fake login 
  login( user: IUser ): Observable<any> {
    return from([true]);
  }
}
