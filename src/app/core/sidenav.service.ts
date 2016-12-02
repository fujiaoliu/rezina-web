import { Component, Injectable } from '@angular/core';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class SidenavService {
  private mission= new Subject<string>();

  sidenavObs$ = this.mission.asObservable();

  open(source:string): void {
    console.log('open sidenave');
    this.mission.next(source);
  }

  close(): void {
    console.log('close sidenav');
    this.mission.next('close');
  }
}
