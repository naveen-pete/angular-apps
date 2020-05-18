import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui.reducer';

export interface State {
  ui: fromUi.State;
};

export const appReducer: ActionReducerMap<State> = {
  ui: fromUi.uiReducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
