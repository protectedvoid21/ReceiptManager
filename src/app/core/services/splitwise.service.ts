import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetGroupsResponseModel, GroupModel} from "./get-groups-response.model";
import {environment} from "../../../environments/environment";
import {CreateExpenseModel} from "./create-expense.model";

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {
  private urlGroup = environment.apiUrl + 'splitwise/';

  selectedGroup?: GroupModel

  constructor(private httpClient: HttpClient) {
  }

  getCurrentUser() {
    return this.httpClient.get(this.urlGroup + 'user')
  }

  getGroups(): Observable<GetGroupsResponseModel> {
    return this.httpClient.get<GetGroupsResponseModel>(this.urlGroup + 'groups');
  }

  selectGroup(group: GroupModel) {
    this.selectedGroup = group
  }

  createExpense(expenseModel: CreateExpenseModel) {
    let expenseBody: any = {
      cost: expenseModel.cost,
      details: expenseModel.description,
      groupId: expenseModel.groupId,
      description: expenseModel.description,
      date: expenseModel.date,
      currencyCode: expenseModel.currencyCode,
      userExpenses: expenseModel.users
    }

    return this.httpClient.post(this.urlGroup + 'expense', expenseBody)
  }
}
