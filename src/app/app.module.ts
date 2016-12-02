import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { UIModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  MaterialModule.forRoot(),
                  SharedModule,
                  CoreModule,
                  AppRoutingModule,
                  LayoutModule,
                  UIModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
