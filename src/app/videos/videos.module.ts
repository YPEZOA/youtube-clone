import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SeeVideoComponent } from './components/see-video/see-video.component';
import { MoreVideosShowComponent } from './components/more-videos-show/more-videos-show.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SeeVideoComponent,
    MoreVideosShowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class VideosModule { }
