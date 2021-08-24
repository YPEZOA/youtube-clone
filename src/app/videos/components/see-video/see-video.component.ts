import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-video',
  templateUrl: './see-video.component.html',
  styleUrls: ['./see-video.component.scss']
})
export class SeeVideoComponent implements OnInit {

  @Input() showVideoSelected: any;
  @Input() query!: string;
  @Input() url!: string;

  constructor() {}

  ngOnInit(): void {
  }

  public onSeeVideo(event: any) {
    this.url = event.id.videoId;
    this.showVideoSelected = event.snippet;
    console.log(this.showVideoSelected);
  }

}
