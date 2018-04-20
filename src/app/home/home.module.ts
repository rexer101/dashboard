import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {UsersMapContainerModule} from 'ht-angular';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UsersMapContainerModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
