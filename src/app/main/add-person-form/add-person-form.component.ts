import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Person} from "../person";
import {ValidatorView} from "../validatorView";

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.scss']
})
export class AddPersonFormComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('validationMessage') validationMessageLabel!: ElementRef<HTMLParagraphElement>;

  @Output() personAdded: EventEmitter<Person> = new EventEmitter<Person>();

  submit() {
    if (!this.validate()) {
      return;
    }

    this.personAdded.emit(new Person(this.nameInput.nativeElement.value));
    this.nameInput.nativeElement.value = "";
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
