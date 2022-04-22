import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from './add-bien/add-bien.component';
import { EditBienComponent } from './edit-bien/edit-bien.component';
import { ShowBienComponent } from './show-bien/show-bien.component';

const routes: Routes = [{path: "add", component : AddBienComponent},
{path: 'show/:id', component: ShowBienComponent},
{path: 'edit/:id', component: EditBienComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienRoutingModule { }
