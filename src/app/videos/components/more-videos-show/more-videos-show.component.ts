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

  constructor(private videoService: YoutubeVideosService,
              private sanitizer: DomSanitizer)
  {}

  ngOnInit(): void {
    this.showVideosCoincidence();
  }

  private showVideosCoincidence(): void {
    this.videoService.searchVideosCoincidences(this.query)
    .subscribe(resp => {
      this.data = resp.items;
      this.data.forEach((items: any) => {
        this.videoId = items.id.videoId;
      });
    });
  }

  public handleSeeVideo(videoId: string): void {
    const urlSecured = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    return this.seeVideo.emit(urlSecured);
  }


}
