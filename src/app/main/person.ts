import {Product} from "./product";

export class Person {
  name: string
  products: Product[] = []

  constructor(name: string) {
    this.name = name
  }

  getSumCost() {
    let sum = 0
    for (let product of this.products) {
      sum += product.getPricePerPerson()
    }
    return sum
  }

  addProduct(product: Product) {
    this.products.push(product)
  }

  removeProduct(product: Product) {
    let index = this.products.indexOf(product)
    if (index != -1) {
      this.products.splice(index, 1)
    }
  }
}
