import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SharedService } from '../shared.service';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, zip } from 'rxjs';

@Component({
  selector: 'app-main-brother',
  templateUrl: './main-brother.component.html',
  styleUrls: ['./main-brother.component.scss']
})
export class MainBrotherComponent implements OnInit, OnDestroy {
  @Input() id;
  @Input() fromBrother;
  @Output() fromBrotherChange: EventEmitter<any> = new EventEmitter();

  private subscriptions = [];
  profile;
  comments;
  isAdult;
  data;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.isAdult = this.id >= 18 ? true : false;
    this.fromBrotherChange.emit({ isAdult: this.isAdult });
    const $behaviorSubjectSubscription = this.sharedService.getBehaviorSubjectObservableData().subscribe(data => {
      this.data = data ? data : null;
    });
    this.sharedService
      .getProfile()
      .pipe(
        mergeMap(profile => {
          this.profile = profile;
          return this.sharedService.getComments();
        })
      )
      .subscribe(comments => (this.comments = comments));

    /* this.sharedService
      .getSubjectObservableData()
      .pipe(withLatestFrom(this.sharedService.getBehaviorSubjectObservableData()))
      .subscribe(
        ([behaviorSubject, subjectData]) => {
          console.log(subjectData);
          console.log(behaviorSubject);
      });
    */
    /* combineLatest(this.sharedService.getBehaviorSubjectObservableData(), this.sharedService.getSubjectObservableData()).subscribe(
      ([behaviorSubject, subjectData]) => {
        console.log(subjectData);
        console.log(behaviorSubject);
      }
    ); */

    zip(this.sharedService.getBehaviorSubjectObservableData(), this.sharedService.getSubjectObservableData()).subscribe(
      ([behaviorSubject, subjectData]) => {
        console.log(subjectData);
        console.log(behaviorSubject);
      }
    );

    const exampleComment = [
      {
        id: 1,
        body: 'my awesome comment',
        postId: 1
      }
    ];
    const $setCommentsSubscription = this.sharedService.setComments(exampleComment).subscribe(comments => (this.comments = comments));
    const $getCommentsSubscription = this.sharedService.getComments().subscribe(comments => (this.comments = comments));
    this.subscriptions = [...this.subscriptions, $behaviorSubjectSubscription, $setCommentsSubscription, $getCommentsSubscription];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
