import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobModule } from './job/job.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    JobModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
