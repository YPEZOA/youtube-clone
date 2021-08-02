import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-video',
  templateUrl: './see-video.component.html',
  styleUrls: ['./see-video.component.scss']
})
export class SeeVideoComponent implements OnInit {

  @Input() videoId: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
