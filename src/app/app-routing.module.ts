import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { ModelDrivenComponent } from './pages/model-driven/model-driven.component';
import { TableFormComponent } from './pages/table-form/table-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'model-driven', component: ModelDrivenComponent },
  { path: 'table-form', component: TableFormComponent },
  { path: '*', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
