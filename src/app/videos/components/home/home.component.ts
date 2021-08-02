import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { YoutubeVideosService } from '../../services/youtube-videos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //
  
  tokenNextPage!: string;
  context!: string;
  query!: string;
  videoId!: string;
  showButton!: boolean;
  results!: any[];
  seeVideo! : boolean;
  
  constructor(@Inject(DOCUMENT)
  private document: Document, 
  private youtubeService: YoutubeVideosService
  ) { }
  
  ngOnInit(): void {
    this.context = 'video'
    this.onWindowScroll();
  }
  
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset
    const scrollTop = this.document.documentElement.scrollTop
    this.showButton = (yOffset || scrollTop) > 1000;
  }

  public searchVideos(query: string): void {
    this.query = query;
    if (query == '' || query == undefined) {
      return
    } else { 
      if (this.context === 'video' && query.trim().toLowerCase() != '') {
        this.youtubeService.searchVideos(query, this.tokenNextPage)
          .subscribe((resp: any) => { 
            this.seeVideo = false;
            console.log(resp);
            this.results = resp.items   
            this.tokenNextPage = resp.nextPageToken
            this.videoId = resp
          })
      }
    }
  }

  public getChannelInfo(): void {
    this.youtubeService.getChannel('UCYwHhTxTAz6aLwMcyPitJjg')
      .subscribe(resp => console.log(resp)
      )
  }

  public onGetMoreVideos(): void {
    this.youtubeService.searchVideos(this.query, this.tokenNextPage)
      .subscribe(resp => {
          this.results.push(resp.items)
      })
  }

  public onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

}
