import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
{
  path:'',
  component:NavComponent,
  children:[
    {
      path:'create',
      component:ProductFormComponent
    },  {
      path:'table',
      component:TableComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
