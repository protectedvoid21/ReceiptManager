import { Person } from "./person";

export class Product {
    name: string
    price: number
    private persons: Person[] = []

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    addPerson(person: Person) {
      this.persons.push(person)
    }

    removeAllPersons() {
      this.persons.forEach(p => p.removeProduct(this))
      this.persons = []
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
      return this.price / this.persons.length
    }
}
