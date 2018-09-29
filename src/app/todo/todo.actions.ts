import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const TOGGLE_All_TODO = '[TODO] Toggle All todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public texto: string) {

    }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) {

    }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_All_TODO;

    constructor(public toggleState: boolean) {

    }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor(public id: number, public text: string) {

    }
}

export type Actions = AddTodoAction | DeleteTodoAction | EditTodoAction | ToggleAllTodoAction | ToggleTodoAction;
