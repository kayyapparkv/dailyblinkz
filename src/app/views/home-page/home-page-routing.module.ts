import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponentComponent } from './subscribe-component/subscribe-component.component';
import { UnsubscribeComponentComponent } from './unsubscribe-component/unsubscribe-component.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponentComponent,
  },
  {
    path: ':id',
    component: UnsubscribeComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
