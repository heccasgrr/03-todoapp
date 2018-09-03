import { Todo } from './todo/model/todo.model';

// It will unifies all reducers of the app.

export interface AppState {
    todos: Todo[];
}
