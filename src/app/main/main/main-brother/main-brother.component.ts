import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-brother',
  templateUrl: './main-brother.component.html',
  styleUrls: ['./main-brother.component.scss']
})
export class MainBrotherComponent implements OnInit {
  @Input() id;
  @Input() fromBrother;
  @Output() fromBrotherChange: EventEmitter<any> = new EventEmitter();

  isAdult;
  data;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.isAdult = this.id >= 18 ? true : false;
    this.fromBrotherChange.emit({ isAdult: this.isAdult });
    this.data = this.sharedService.getData();
    this.sharedService.setData('hola soy hermano 1');
  }
}
