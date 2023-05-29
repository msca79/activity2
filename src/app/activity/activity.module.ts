import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivityComponent } from './activity/activity.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, ActivityRoutingModule],
  declarations: [ActivityComponent],
})
export class ActivityModule {}
