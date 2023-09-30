import {Component, ElementRef, ViewChild} from '@angular/core';
import {SplitwiseService} from "../../core/services/splitwise.service";
import {ReceiptCacheService} from "../../core/services/receipt-cache.service";
import {Person} from "../person";
import {GroupMemberModel, GroupModel} from "../../core/services/get-groups-response.model";
import {UserExpenseModel} from "../../core/services/create-expense.model";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-confirm-share-dialog',
  templateUrl: './confirm-share-dialog.component.html',
  styleUrls: ['./confirm-share-dialog.component.scss']
})
export class ConfirmShareDialogComponent {
  @ViewChild('confirmDialog') confirmDialog!: ElementRef<HTMLDialogElement>;

  persons: Person[] = [];
  group?: GroupModel;

  constructor(private receiptCacheService: ReceiptCacheService,
              private splitwiseService: SplitwiseService) {
  }

  show() {
    this.group = this.splitwiseService.selectedGroup;
    this.persons = this.receiptCacheService.getPersons();
    this.confirmDialog.nativeElement.showModal()
  }

  async shareReceipt() {
    const persons = this.receiptCacheService.getPersons();
    const splitwisePersons: UserExpenseModel[] = []

    const currentUser: any = await firstValueFrom(this.splitwiseService.getCurrentUser()!);

    const expenseSum = persons.reduce((acc, p) => acc + Number.parseFloat(p.getSumCost().toFixed(2)), 0).toFixed(2)

    persons.forEach(p => {
      const splitwisePerson = this.group?.members.find(sp => sp.first_name === p.name)
      splitwisePersons.push({
        userId: splitwisePerson!.id,
        paidShare: currentUser.user.id === splitwisePerson!.id ? expenseSum : "0",
        owedShare: p.getSumCost().toFixed(2)
      })
    })

    this.splitwiseService.createExpense({
      cost: expenseSum,
      groupId: this.group!.id,
      description: 'Zakupy',
      details: '',
      date: new Date(),
      currencyCode: 'PLN',
      splitEqually: true,
      users: splitwisePersons
    }).subscribe(() => {
        this.confirmDialog.nativeElement.close()
      })
  }

  cancel() {
    this.confirmDialog.nativeElement.close()
  }
}
