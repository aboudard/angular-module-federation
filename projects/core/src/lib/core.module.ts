import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store';



@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
  StoreModule.forFeature(fromCore.userFeatureKey, fromCore.reducer)],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
