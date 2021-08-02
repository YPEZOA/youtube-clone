import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosRoutingModule } from './videos/videos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideosModule } from './videos/videos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideosRoutingModule,
    VideosModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
