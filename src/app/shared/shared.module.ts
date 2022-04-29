import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterPipe } from './pipes/list-filter.pipe';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { ImagePipe } from './pipes/image.pipe';

const importExport = [
  ListFilterPipe,
  TypeFilterPipe,
  ImagePipe,
]

@NgModule({
  declarations: [...importExport],
  imports: [
    CommonModule
  ],
  exports: [...importExport]
})
export class SharedModule { }
