import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';
import * as Auth from '../Actions/auth.action';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;

  error$ = this.store.select(state => state.auth.error)
  isloading$ = this.store.select(state => state.auth.isloading)

  constructor(private store: Store<any>) { }


  ngOnInit(): void {
    //fakelogin
    this.user = {
      username: 'jorgeucano',
      email: 'jorgeuc@no.com',
      password: 'jorgeucano'
    }
  }

  login() {
    this.store.dispatch(new Auth.LoginUser({user: this.user}))

  }
}
