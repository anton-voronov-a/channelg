import { Component } from '@angular/core';
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ShareComponent } from "../share/share.component";
import { HelpDialogService } from "../help-dialog/help-dialog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private bottomSheet: MatBottomSheet,
    private helpDialogService: HelpDialogService) {
  }

  public embedWidth: number = 420  - 16;
  public get embedHeight(): number {
    return this.embedWidth * 315 / 560;
  };

  public share(): void {
    this.bottomSheet.open(ShareComponent);
  }

  public help(): void {
    this.helpDialogService.show();
  }
}
