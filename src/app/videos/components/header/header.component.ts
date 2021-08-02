import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchCoincidences = new EventEmitter<string>();
  @Input() context:any;
  
  constructor() {}

  ngOnInit(): void {
  }

  handleChangeValue(e: any) {
    let text = e.target.value;
      this.searchCoincidences.emit(text)
  }

}
