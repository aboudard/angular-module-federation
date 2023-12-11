import { Routes } from "@angular/router";
import { FlightsComponent } from "./flights.component";
import { StoreModule } from "@ngrx/store";
import * as fromState from './store';
import { importProvidersFrom } from "@angular/core";
import { CoreModule } from "core";

export const flightsRoutes: Routes = [
    { 
        path: '', 
        component: FlightsComponent, 
        providers: [
            importProvidersFrom(StoreModule.forFeature(fromState.flightsStateFeatureKey, fromState.flightsReducer)),
            importProvidersFrom(CoreModule)
        ]
    }
];