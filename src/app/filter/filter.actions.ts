import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter';

export type FilterTypes = 'all' | 'completed' | 'pending';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filterType: FilterTypes) {}
}

export type Actions = SetFilterAction;
