import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    AuthModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
