import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienRoutingModule } from './bien-routing.module';
import { BienComponent } from './bien.component';


@NgModule({
  declarations: [
    BienComponent
  ],
  imports: [
    CommonModule,
    BienRoutingModule
  ]
})
export class BienModule { }
