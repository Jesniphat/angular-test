import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTestRoutingModule } from './new-test-routing.module';
import { NewTestComponent } from './new-test.component';

@NgModule({
  declarations: [NewTestComponent],
  imports: [
    CommonModule,
    NewTestRoutingModule
  ]
})
export class NewTestModule { }
