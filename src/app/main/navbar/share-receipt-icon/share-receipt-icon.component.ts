import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShareReceiptDialogComponent} from "../share-receipt-dialog/share-receipt-dialog.component";

@Component({
  selector: 'app-share-receipt-icon',
  templateUrl: './share-receipt-icon.component.html',
  styleUrls: ['./share-receipt-icon.component.scss']
})
export class ShareReceiptIconComponent {
  @ViewChild(ShareReceiptDialogComponent) shareDialog!: ShareReceiptDialogComponent

  openDialog() {
    this.shareDialog.show()
  }

  closeDialog() {
    this.shareDialog.close()
  }
}
