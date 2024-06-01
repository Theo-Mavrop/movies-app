import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { LayoutService } from './@core/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private cdRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private layoutService: LayoutService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.cdRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuToggle(isOpen: boolean): void {
    this.layoutService.isSidenavOpened$.next(isOpen);
  }

}
