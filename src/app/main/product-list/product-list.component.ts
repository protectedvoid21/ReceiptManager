import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product";
import {Person} from "../person";
import {CheckboxPersonProductModel} from "../checkbox-person-product.model";
import {FormatUtils} from "../format-utils";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() persons: Person[] = []
  @Input() products: Product[] = []

  @Output() productCheckboxChanged: EventEmitter<CheckboxPersonProductModel> = new EventEmitter<CheckboxPersonProductModel>()
  @Output() productRemoved: EventEmitter<Product> = new EventEmitter<Product>()

  onProductCheckboxChanged(product: Product, person: Person, event: any): void {
    this.productCheckboxChanged.emit({
      person: person,
      product: product,
      checked: event.target.checked
    })
  }

  onProductRemoved(product: Product): void {
    this.productRemoved.emit(product)
  }

  getProductSumPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }

  protected readonly FormatUtils = FormatUtils;
}
