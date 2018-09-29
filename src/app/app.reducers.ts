import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';
// It will unifies all reducers of the app.

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.FilterTypes;
}

export const APP_REDUCERS: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};

