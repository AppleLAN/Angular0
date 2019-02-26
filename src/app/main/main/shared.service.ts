import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data;

  constructor() { }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
}
