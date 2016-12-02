import { Component, Injectable } from '@angular/core';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
  private loadingmission= new Subject<boolean>();

  loadingObs$ = this.loadingmission.asObservable();

  start(): void {
    console.log('showloader started');
    this.loadingmission.next(true);
  }

  stop(): void {
    console.log('showloader stoped');
    this.loadingmission.next(false);
  }
}
