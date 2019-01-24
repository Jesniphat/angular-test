import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForTestComponent } from './for-test.component';

const routes: Routes = [
  {path: '', component: ForTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForTestRoutingModule { }
