import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class SharedModuleModule { }
