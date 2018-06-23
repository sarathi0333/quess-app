import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private behaviorsubject = new BehaviorSubject<object>({});
  currentDetail = this.behaviorsubject.asObservable()

  constructor() { }
  changeuser(data: object) {
    this.behaviorsubject.next(data);
  }
}
