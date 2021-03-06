import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/IUser';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userFake: IUser = {
    username: 'jorgeucano',
    email: 'jorgeuc@no.com',
    password: 'jorgeucano'
  }

  constructor() { }

  login(user: IUser): Observable<any> {
    let toSend = false;
    if(JSON.stringify(user)=== JSON.stringify(this.userFake)) {
      toSend = true;
    }
    return of (toSend).pipe(delay(5000));
  }
}
