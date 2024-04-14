import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { counterSelector } from './store/counterState/counter.selector';
import { decrementAction, incrementAction, resetAction } from './store/counterState/counter.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgrxNewApp_1';
  count$:Observable<any>;
  constructor(private store: Store<AppState>){
    this.count$ = store.select(counterSelector);
  }
  ngOnInit(): void {}
  acction(type:string){
    if(type === 'inc'){
        this.store.dispatch(incrementAction());
    } else if(type === 'dec'){
        this.store.dispatch(decrementAction());
     } else if(type === 'reset'){
     this.store.dispatch(resetAction());
     
     }
  }
}
