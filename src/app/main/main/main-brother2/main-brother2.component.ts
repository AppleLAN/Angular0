import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-brother2',
  templateUrl: './main-brother2.component.html',
  styleUrls: ['./main-brother2.component.scss']
})
export class MainBrother2Component implements OnInit, OnDestroy {
  @Input() id;
  @Input() fromBrother;
  isAdultFromBrother;
  data;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.isAdultFromBrother = this.fromBrother.isAdult;
    this.data = this.sharedService.getData();
    this.sharedService.setBehaviorSubjectObservableData('hola soy tu hermano BehaviorSubject');
    setTimeout(() => {
      this.sharedService.setSubjectObservableData('hola soy tu hermano Subject');
    }, 6000);

    setTimeout(() => {
      this.sharedService.setBehaviorSubjectObservableData('hola soy tu hermano BehaviorSubject del futuro');
    }, 7000);
  }

  ngOnDestroy() {
    alert('me destruyooooooooo brother 2');
  }
}
