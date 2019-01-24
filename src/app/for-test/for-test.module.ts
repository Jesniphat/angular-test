import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForTestComponent } from './for-test.component';
import { ForTestRoutingModule } from './for-test.routing.module';

@NgModule({
  declarations: [
    ForTestComponent
  ],
  imports: [
    CommonModule,
    ForTestRoutingModule
  ]
})
export class ForTestModule { }
