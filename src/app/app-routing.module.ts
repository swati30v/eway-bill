import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EwayFormComponent } from './eway-form/eway-form.component';


const routes: Routes = [
  {path:'',component:EwayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
