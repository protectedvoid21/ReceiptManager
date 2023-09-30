import {Component, Input} from '@angular/core';
import {Person} from "../person";
import {FormatUtils} from "../format-utils";
import {ReceiptCacheService} from "../../core/services/receipt-cache.service";
import {PersonObserver} from "../../core/PersonObserver";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements PersonObserver {
  persons: Person[] = []

  constructor(private receiptCacheService: ReceiptCacheService) {
    this.receiptCacheService.addObservator(this)
  }

  onPersonsChanged(persons: Person[]): void {
    this.persons = persons
  }

  protected readonly FormatUtils = FormatUtils
}
