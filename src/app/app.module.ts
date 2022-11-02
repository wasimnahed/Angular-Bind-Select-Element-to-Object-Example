import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
