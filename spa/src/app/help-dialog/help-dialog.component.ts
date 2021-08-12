import { Component, OnInit } from '@angular/core';
import { BrowserViewModel } from "./browser-view-model";

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent implements OnInit {

  constructor() {
    this.selectedBrowser = this.yandex;
    this.browsers = [
      this.yandex,
      this.kiwi,
      this.firefox
    ];
  }
  private firefox: BrowserViewModel = new BrowserViewModel('Firefox Nightly browser (stable)');
  private kiwi: BrowserViewModel = new BrowserViewModel('Kiwi browser (simple)');
  private yandex: BrowserViewModel = new BrowserViewModel('Yandex browser (stable, simple and recommended)');

  public get isYandex(): boolean {
    return this.selectedBrowser === this.yandex;
  }

  public get isKiwi(): boolean {
    return this.selectedBrowser === this.kiwi;
  }

  public get isFirefox(): boolean {
    return this.selectedBrowser === this.firefox;
  }

  public selectedBrowser: BrowserViewModel;
  public browsers: BrowserViewModel[];
  ngOnInit(): void {
  }

}
