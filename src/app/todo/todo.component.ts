import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  // Component properties
  toggledAll: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onClickToggleAll() {

    this.toggledAll = !this.toggledAll;
    const action = new ToggleAllTodoAction(this.toggledAll);
    this.store.dispatch(action);

  }

}
