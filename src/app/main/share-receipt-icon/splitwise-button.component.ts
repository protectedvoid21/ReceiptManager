import {Component, ElementRef, ViewChild} from '@angular/core';
import {SplitwiseDialogComponent} from "./share-receipt-dialog/splitwise-dialog.component";
import {ConfirmShareDialogComponent} from "../confirm-share-dialog/confirm-share-dialog.component";

@Component({
  selector: 'app-share-receipt-icon',
  templateUrl: './splitwise-button.component.html',
  styleUrls: ['./splitwise-button.component.scss']
})
export class SplitwiseButtonComponent {
  @ViewChild(SplitwiseDialogComponent) shareDialog!: SplitwiseDialogComponent
  @ViewChild(ConfirmShareDialogComponent) confirmDialog!: ConfirmShareDialogComponent

  openDialog() {
    this.shareDialog.show()
  }

  openConfirmation() {
    this.confirmDialog.show()
  }

  closeDialog() {
    this.shareDialog.close()
  }
}
