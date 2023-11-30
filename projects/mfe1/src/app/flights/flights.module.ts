import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';
import { CoreModule } from 'core';


@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    CoreModule, // TODO: get the core store
    StoreModule.forFeature(fromState.flightsStateFeatureKey, fromState.flightsReducer)
  ]
})
export class FlightsModule { }
