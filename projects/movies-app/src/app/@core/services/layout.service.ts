import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LayoutService {

  isSidenavOpened$: BehaviorSubject<boolean>;

  constructor() {
    this.isSidenavOpened$ = new BehaviorSubject<boolean>(false);
  }
}
