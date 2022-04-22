import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from './bien/add-bien/add-bien.component';
import { BienComponent } from './bien/bien.component';
import { EditBienComponent } from './bien/edit-bien/edit-bien.component';
import { ShowBienComponent } from './bien/show-bien/show-bien.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full', component: HomeComponent},
  {path: 'bien', component: BienComponent},
  {path: 'add', component: AddBienComponent},
  {path: 'show', component: ShowBienComponent},
  {path: 'edit', component: EditBienComponent},
  {path: 'login', component: LoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
