import {Component, ElementRef, ViewChild} from '@angular/core';
import {SplitwiseService} from "../../../core/services/splitwise.service";
import {GetGroupsResponseModel, GroupModel} from "../../../core/services/get-groups-response.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-share-receipt-dialog',
  templateUrl: './share-receipt-dialog.component.html',
  styleUrls: ['./share-receipt-dialog.component.scss']
})
export class ShareReceiptDialogComponent {
  @ViewChild('shareDialog') shareDialog!: ElementRef<HTMLDialogElement>
  groupsResponse$!: Observable<GetGroupsResponseModel>

  constructor(private splitwiseService: SplitwiseService) {
  }

  ngOnInit() {
    this.groupsResponse$ = this.splitwiseService.getGroups()
  }

  show() {
    this.shareDialog.nativeElement.showModal();
  }

  close() {
    this.shareDialog.nativeElement.close();
  }
}
