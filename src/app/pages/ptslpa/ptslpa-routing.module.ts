import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtslpaPage } from './ptslpa.page';

const routes: Routes = [
  {
    path: '',
    component: PtslpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtslpaPageRoutingModule {}
