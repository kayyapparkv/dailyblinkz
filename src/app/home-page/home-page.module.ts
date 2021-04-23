import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { ComponentsModule } from '../shared-module/components/components.module';


@NgModule({
  declarations: [
    SubscribeComponent,
    UnsubscribeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ComponentsModule
  ]
})
export class HomePageModule { }
