import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCounterValue } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
})
export class CounterInputComponent implements OnInit {
  inputValue: number;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {}

  addCounter() {
    this.store.dispatch(addCounterValue({ count: this.inputValue }));
  }
}
