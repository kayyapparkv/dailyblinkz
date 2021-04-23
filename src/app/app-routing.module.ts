import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared-module/components/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'subscribe',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'subscribe',
        loadChildren: () => import('./home-page/home-page.module').then(mod => mod.HomePageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
