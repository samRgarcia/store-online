import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DemoComponent } from './demo/demo.component';

import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full',
      },
      {
        path: 'home',
       loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'products',
        canActivate:[AdminGuard],
        loadChildren:()=>import('./product/product.module').then(p=>p.ProductModule)
      },
      {
        path: 'contact',
        canActivate:[AdminGuard],
        loadChildren:()=>import('./contact/contact.module').then(c=>c.ContactModule)
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
