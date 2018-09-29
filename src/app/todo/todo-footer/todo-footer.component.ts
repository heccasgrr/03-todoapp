import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  // Component properties
  filters: fromFilter.FilterTypes[];
  pendingTodos: number;
  selectedFilter: fromFilter.FilterTypes;

  constructor(private store: Store<AppState>) {
    this.filters = ['all', 'completed', 'pending'];
    this.selectedFilter = 'all';
   }

  ngOnInit() {
    this.store.subscribe(state => {
      this.selectedFilter = state.filter;
      this.getTotalPendingTodos(state.todos);
    });
  }

  getFilterNgClass(filterType: fromFilter.FilterTypes) {
    return {
      'selected': filterType === this.selectedFilter
    };
  }

  onClickFilter(filter: fromFilter.FilterTypes) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  getTotalPendingTodos(todos: Todo[]) {
    this.pendingTodos = todos.filter(todo => !todo.completed).length;
  }
}
