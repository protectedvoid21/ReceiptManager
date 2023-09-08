import { Component } from '@angular/core';
import {Person} from "../person";
import {Product} from "../product";
import {CheckboxPersonProductModel} from "../checkbox-person-product.model";

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  persons: Person[] = []
  products: Product[] = []

  ngOnInit() {
  }

  private seedSample() {
    this.products.push(new Product("Milk", 1.07))
    this.products.push(new Product("Rice", 1.59))
    this.products.push(new Product("Eggs", 3.14))
    this.products.push(new Product("Cheese", 12.60))
    this.products.push(new Product("Chicken Breasts", 9.40))
    this.products.push(new Product("Apples", 2.31))
    this.products.push(new Product("Tomato", 2.58))
    this.products.push(new Product("Potato", 1.75))
    this.products.push(new Product("Onion", 1.10))

    this.persons.push(new Person("Alice"))
    this.persons.push(new Person("Bob"))
    this.persons.push(new Person("Carol"))
  }

  onProductAdded(product: Product) {
    this.products.push(product)
  }

  onPersonAdded(person: Person) {
    this.persons.push(person)
  }

  onCheckboxProductChanged(personProductModel: CheckboxPersonProductModel) {
    if(personProductModel.checked) {
      personProductModel.person.addProduct(personProductModel.product)
      personProductModel.product.addPerson(personProductModel.person)
    }
    else {
      personProductModel.person.removeProduct(personProductModel.product)
      personProductModel.product.removePerson(personProductModel.person)
    }
  }
}
