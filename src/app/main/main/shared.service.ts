import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data;
  private subjectObservable: Subject<any> = new Subject;
  private behaviorSubjectObservable: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }

  getProfile() {
    return this.httpClient.get('https://my-json-server.typicode.com/typicode/demo/profile');
  }

  getComments() {
    return this.httpClient.get('https://my-json-server.typicode.com/typicode/demo/comments');
  }

  setComments(comments) {
    return this.httpClient.post('https://my-json-server.typicode.com/typicode/demo/comments', comments);
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getSubjectObservableData() {
    return this.subjectObservable;
  }

  setSubjectObservableData(data) {
    this.subjectObservable.next(data);
  }

  getBehaviorSubjectObservableData() {
    return this.behaviorSubjectObservable;
  }

  setBehaviorSubjectObservableData(data) {
    this.behaviorSubjectObservable.next(data);
  }

}
