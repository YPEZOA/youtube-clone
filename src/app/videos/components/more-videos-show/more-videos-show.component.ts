import { Component, Input, OnInit } from '@angular/core';
import {YoutubeVideosService} from '../../services/youtube-videos.service';

@Component({
  selector: 'app-more-videos-show',
  templateUrl: './more-videos-show.component.html',
  styleUrls: ['./more-videos-show.component.scss']
})
export class MoreVideosShowComponent implements OnInit {

  @Input() query!: string;

  constructor(private videoService: YoutubeVideosService) { }

  ngOnInit(): void {
    this.showVideosCoincidence();
  }

  private showVideosCoincidence(): void {
    this.videoService.searchVideos(this.query)
      .subscribe(resp => console.log(resp))
  }

}
