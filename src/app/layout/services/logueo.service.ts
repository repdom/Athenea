import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {
  private subject = new Subject<boolean>();

  constructor() { }

  sendMessage(logeo: boolean) {
    this.subject.next(logeo);
  }

  getMessage(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
