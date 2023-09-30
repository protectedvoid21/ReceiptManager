import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Person} from "../../person";
import {ValidatorView} from "../../validatorView";
import {ReceiptCacheService} from "../../../core/services/receipt-cache.service";

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.scss']
})
export class AddPersonFormComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('validationMessage') validationMessageLabel!: ElementRef<HTMLParagraphElement>;

  constructor(private receiptCacheService: ReceiptCacheService) {
  }

  submit() {
    if (!this.validate()) {
      return
    }

    const person = new Person(this.nameInput.nativeElement.value)
    this.receiptCacheService.addPerson(person)

    this.nameInput.nativeElement.value = ""
  }

  validate(): boolean {
    if(this.nameInput.nativeElement.value.length === 0) {
      ValidatorView.showFailure(this.validationMessageLabel.nativeElement, "Nazwa osoby nie może być pusta");
      return false;
    }
    ValidatorView.showSuccess(this.validationMessageLabel.nativeElement, "Osoba została dodana!");
    return true;
  }
}
