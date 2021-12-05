import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter();
  isSidenavOpened$: BehaviorSubject<boolean>;

  constructor(
    private layoutService: LayoutService
  ) {
    this.isSidenavOpened$ = this.layoutService.isSidenavOpened$;
  }

  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    this.sideNavToggled.emit();
  }

}
