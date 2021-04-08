import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./views/employees/list/list.module').then(m => m.ListModule) }, 
  { path: 'new', loadChildren: () => import('./views/employees/new/new.module').then(m => m.NewModule) }, 
  { path: 'details', loadChildren: () => import('./views/employees/details/details.module').then(m => m.DetailsModule) }, 
  { path: 'edit', loadChildren: () => import('./views/employees/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
