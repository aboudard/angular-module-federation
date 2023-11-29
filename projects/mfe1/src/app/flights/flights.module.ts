import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './flights.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';


@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    StoreModule.forFeature(fromState.flightsStateFeatureKey, fromState.flightsReducer)
  ]
})
export class FlightsModule { }
