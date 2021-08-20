import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-video',
  templateUrl: './see-video.component.html',
  styleUrls: ['./see-video.component.scss']
})
export class SeeVideoComponent implements OnInit {

  @Input() videoId!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() channel!: string;
  @Input() publishedAt!: string;
  @Input() url!: any;
  @Input() query!: string;

  constructor() {}

  ngOnInit(): void {
  }

  public onSeeVideo(event: any) {
    this.url = event;
    console.log(this.url, event)
  }

}
