import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YoutubeVideosService } from '../../services/youtube-videos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() changeContext = new EventEmitter<string>();
  @Input() channelId: string;

  constructor(private videoService: YoutubeVideosService) {
    this.channelId = '';
  }

  ngOnInit(): void {
  }

  public onHandleSearchChannels(): void {
  }

}
