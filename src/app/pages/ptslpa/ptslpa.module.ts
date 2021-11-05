import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtslpaPageRoutingModule } from './ptslpa-routing.module';

import { PtslpaPage } from './ptslpa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtslpaPageRoutingModule
  ],
  declarations: [PtslpaPage]
})
export class PtslpaPageModule {}
