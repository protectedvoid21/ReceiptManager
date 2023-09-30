import {Person} from "../main/person";

export interface PersonObserver {
  onPersonsChanged(persons: Person[]): void;
}
