import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {BaseApi} from './shared/core/base-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule,
    AuthModule, AppRoutingModule
  ],
  providers: [UsersService, AuthService, BaseApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
