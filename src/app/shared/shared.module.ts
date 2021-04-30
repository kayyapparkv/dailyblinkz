import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    NgbModule
  ]
})
export class SharedModule { }
