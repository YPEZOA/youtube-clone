import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeeVideoComponent } from './components/see-video/see-video.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'see-video',
    component: SeeVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
