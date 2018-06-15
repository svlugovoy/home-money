import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {SystemModule} from './system/system.module';
import {BaseApi} from './shared/core/base-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule,
    AuthModule, AppRoutingModule, SystemModule
  ],
  providers: [UsersService, AuthService, BaseApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
