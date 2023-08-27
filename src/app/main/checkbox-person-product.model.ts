import {Person} from "./person";
import {Product} from "./product";

export interface CheckboxPersonProductModel {
  person: Person
  product: Product
  checked: boolean
}
