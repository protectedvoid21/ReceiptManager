import {Component, Input} from '@angular/core';
import {Person} from "../person";
import {FormatUtils} from "../format-utils";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
    @Input() persons: Person[] = []
  protected readonly FormatUtils = FormatUtils;
}
