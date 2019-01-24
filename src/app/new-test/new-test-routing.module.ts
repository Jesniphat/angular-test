import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTestComponent } from './new-test.component';

const routes: Routes = [
  {path: '', component: NewTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTestRoutingModule { }
