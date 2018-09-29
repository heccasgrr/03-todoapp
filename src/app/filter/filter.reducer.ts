import * as fromFilter from './filter.actions';

const initialState: fromFilter.FilterTypes = 'all';

export function filterReducer(state = initialState, action: fromFilter.Actions) {

    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filterType;
        default:
            return state;
    }

}
