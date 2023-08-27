import { Person } from "./person";

export class Product {
    name: string
    price: number
    count: number
    private persons: Person[] = []

    constructor(name: string, price: number, count: number) {
        this.name = name
        this.price = price
        this.count = count
    }

    addPerson(person: Person) {
      this.persons.push(person)
    }

    removePerson(person: Person) {
      let index = this.persons.indexOf(person)
      if(index != -1) {
          this.persons.splice(index, 1)
      }
    }

    getPricePerPerson() {
      if (this.persons.length === 0) {
        return 0;
      }
      return this.getSumPrice() / this.persons.length
    }

    getSumPrice(): number {
        return this.price * this.count
    }
}
