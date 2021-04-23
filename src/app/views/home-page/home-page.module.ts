import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { UnsubscribeComponentComponent } from './unsubscribe-component/unsubscribe-component.component';
import { SubscribeComponentComponent } from './subscribe-component/subscribe-component.component';


@NgModule({
  declarations: [
    UnsubscribeComponentComponent,
    SubscribeComponentComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
