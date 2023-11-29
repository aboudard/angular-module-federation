import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FlightsState, flightsStateFeatureKey } from ".";

const getFlightsState = createFeatureSelector<FlightsState>(flightsStateFeatureKey);

export const getHasFlights = createSelector(
    getFlightsState,
    state => state.hasFlights
);