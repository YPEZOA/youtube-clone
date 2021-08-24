import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {YoutubeVideosService} from '../../services/youtube-videos.service';

@Component({
  selector: 'app-more-videos-show',
  templateUrl: './more-videos-show.component.html',
  styleUrls: ['./more-videos-show.component.scss']
})
export class MoreVideosShowComponent implements OnInit {

  @Input() query!: string;
  @Output() seeVideo = new EventEmitter<any>();
  data!: any;
  videoId!: string;

  constructor(private videoService: YoutubeVideosService) {}

  ngOnInit(): void {
    this.showVideosToQuery();
  }

  private showVideosToQuery(): void {
    this.videoService.searchVideosCoincidences(this.query)
    .subscribe(resp => {
      this.data = resp.items;
    });
  }

  public handleSeeVideo(video: any): void {
    return this.seeVideo.emit(video);
  }

}
