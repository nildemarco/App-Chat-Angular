import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modulos de rgrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './reducers/reducers';
import { LoginComponent } from '../app/auth/login/login.component';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'AngularchatNgRx',
    logOnly: environment.production,
    maxAge: 25,
  })
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ...NGRX_IMPORTS,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
