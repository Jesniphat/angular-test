import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'test', loadChildren: './for-test/for-test.module#ForTestModule'},
  { path: 'new', loadChildren: './new-test/new-test.module#NewTestModule' },
  { path: '', redirectTo: 'test', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
