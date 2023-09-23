import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {ValidatorView} from "../validatorView";
import {Product} from "../product";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('priceInput') priceInput!: ElementRef<HTMLInputElement>;
  @ViewChild('validationMessage') validationMessageLabel!: ElementRef<HTMLParagraphElement>;

  @Output() productAdded: EventEmitter<Product> = new EventEmitter<Product>();

  submit() {
    if (!this.validate()) {
      return;
    }

    const product = new Product(
      this.nameInput.nativeElement.value,
      Number.parseFloat(this.priceInput.nativeElement.value),
    );

    this.nameInput.nativeElement.value = ""
    this.priceInput.nativeElement.value = ""

    this.nameInput.nativeElement.focus()

    this.productAdded.emit(product)
  }

  validate() {
    if(this.nameInput.nativeElement.value.length === 0) {
      ValidatorView.showFailure(this.validationMessageLabel.nativeElement, "Nazwa produktu nie może być pusta");
      return false;
    }
    if(Number.parseFloat(this.priceInput.nativeElement.value) <= 0 || this.priceInput.nativeElement.value.length === 0) {
      ValidatorView.showFailure(this.validationMessageLabel.nativeElement, "Cena produktu musi być większa od 0");
      return false;
    }
    ValidatorView.showSuccess(this.validationMessageLabel.nativeElement,"Produkt został dodany!");
    return true;
  }
}
