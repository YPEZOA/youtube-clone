import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideosService } from '../../services/youtube-videos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tokenNextPage!: string;
  context!: string;
  query!: string;
  videoId!: string;
  showButton!: boolean;
  videos!: any[];
  seeVideo!: boolean;
  channel!: string;
  channelId!: string;
  showVideoSelected!: any;
  url!: string;

  constructor(@Inject(DOCUMENT)
    private document: Document,
    private youtubeService: YoutubeVideosService,
  ) { }

  ngOnInit(): void {
    this.context = 'video'
    this.onWindowScroll();
  }

  public onSeeVideo(video: any): void {
    this.seeVideo = true;
    if (video) {
      this.showVideoSelected = video.snippet;
      this.url = video.id.videoId;
    }
  }

  @HostListener('window:scroll')
  private onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > 320;
  }

  public searchVideos(query: string): void {
    this.query = query;
    if (query === '' || query === undefined) return;
    if (this.context === 'video' && query.trim().toLowerCase() !== '') {
      this.youtubeService.searchVideos(query)
        .subscribe((data: any) => {
          this.seeVideo = false;
          this.videos = data.items
          this.tokenNextPage = data.nextPageToken
        })
    }
  }

  public getChannelInfo(): void {
    this.youtubeService.getChannel('UCYwHhTxTAz6aLwMcyPitJjg')
    .subscribe(resp => console.log(resp))
  }

  public onGetMoreVideos(): void {
    this.youtubeService.searchVideos(this.query)
    .subscribe(resp => {
      this.videos.push(resp.items)
    })
  }

  public onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
