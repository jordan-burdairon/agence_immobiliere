import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienComponent } from './bien/bien.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bien', component: BienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
