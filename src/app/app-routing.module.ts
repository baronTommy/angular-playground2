import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './conponents/my-form/my-form.component'
import { FormComponent } from './conponents/molecules/form/form.component'

const routes: Routes = [
  {path: 'my-form', component: MyFormComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
