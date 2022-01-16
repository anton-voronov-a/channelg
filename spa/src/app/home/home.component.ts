import { Component, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { ShareComponent } from "../share/share.component";
import { HelpDialogService } from "../help-dialog/help-dialog.service";
import { HomeServiceService } from "./home-service.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  constructor(
    private bottomSheet: MatBottomSheet,
    private helpDialogService: HelpDialogService,
    private homeService: HomeServiceService) {
  }

  private destroySubject: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  public onChromeStore(url: string) {
    this.homeService.onChromeStore(url);
  }

  public onEdgeStore(url: string) {
    this.homeService.onEdgeStore(url);
  }

  public share(): void {
    this.bottomSheet.open(ShareComponent);
  }

  public help(): void {

    this.homeService.onMobileDevices()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.helpDialogService.show();
      });
  }
}
