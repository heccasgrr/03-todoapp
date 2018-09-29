// Angular
import { Component, OnInit } from '@angular/core';
// Redux
import { Store } from '@ngrx/store';

// States
import { AppState } from '../../app.reducers';

// Models
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  // Component properties
  todos: Todo[];
  filter: string;

  constructor(private store: Store<AppState>) {
    this.todos = [];
  }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }
}
