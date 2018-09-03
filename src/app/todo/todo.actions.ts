import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public texto: string) {

    }
}

export type Actions = AddTodoAction;
