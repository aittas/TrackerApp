import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <= add this
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackerPage } from './tracker.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // <= add this
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackerPage]
})
export class TrackerPageModule {}
