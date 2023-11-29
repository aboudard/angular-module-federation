import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';


export const flightsStateFeatureKey = 'flights';

export interface FlightsState {
  hasFlights: boolean;
}

const initialState: FlightsState = {
  hasFlights: false
};

export const flightsReducer = createReducer(
  initialState
);

