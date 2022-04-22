import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienRoutingModule } from './bien-routing.module';
import { BienComponent } from './bien.component';
import { AddBienComponent } from './add-bien/add-bien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowBienComponent } from './show-bien/show-bien.component';
import { EditBienComponent } from './edit-bien/edit-bien.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListFilterPipe } from './pipes/list-filter.pipe';


@NgModule({
  declarations: [
    BienComponent,
    AddBienComponent,
    ShowBienComponent,
    EditBienComponent,
    ListFilterPipe,
  ],
  imports: [
    CommonModule,
    BienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxPaginationModule,
  ]
})
export class BienModule { }
