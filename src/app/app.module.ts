import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HtModule} from 'ht-angular';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HtModule.forRoot({token: 'sk_test_967439f81d3a67b2c5788a073b8c8528753b7297', mapType: 'leaflet'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
