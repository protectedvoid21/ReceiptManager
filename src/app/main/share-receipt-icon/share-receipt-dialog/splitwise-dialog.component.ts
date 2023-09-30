import {Component, ElementRef, ViewChild} from '@angular/core';
import {SplitwiseService} from "../../../core/services/splitwise.service";
import {GetGroupsResponseModel, GroupModel} from "../../../core/services/get-groups-response.model";
import {Observable} from "rxjs";
import {ConfirmShareDialogComponent} from "../../confirm-share-dialog/confirm-share-dialog.component";
import {ReceiptCacheService} from "../../../core/services/receipt-cache.service";
import {Person} from "../../person";

@Component({
  selector: 'app-splitwise-dialog',
  templateUrl: './splitwise-dialog.component.html',
  styleUrls: ['./splitwise-dialog.component.scss']
})
export class SplitwiseDialogComponent {
  @ViewChild('shareDialog') shareDialog!: ElementRef<HTMLDialogElement>
  @ViewChild(ConfirmShareDialogComponent) confirmShareDialog!: ConfirmShareDialogComponent
  groupsResponse$!: Observable<GetGroupsResponseModel>

  constructor(private splitwiseService: SplitwiseService,
              private receiptCacheService: ReceiptCacheService) {
  }

  ngOnInit() {
    this.groupsResponse$ = this.splitwiseService.getGroups()
  }

  show() {
    this.shareDialog.nativeElement.showModal();
  }

  setGroup(group: GroupModel) {
    const persons = group.members.map(p => new Person(p.first_name))
    this.splitwiseService.selectGroup(group);
    this.receiptCacheService.setPersons(persons);

    this.close();
  }

  close() {
    this.shareDialog.nativeElement.close();
  }
}
