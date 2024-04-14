import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { counterReducer } from './store/counterState/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({CounterState:counterReducer},{})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
