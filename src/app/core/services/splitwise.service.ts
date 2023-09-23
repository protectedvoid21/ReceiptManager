import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GetGroupsResponseModel} from "./get-groups-response.model";
import {environment} from "../../../environments/environment";
import {CreateExpenseModel} from "./create-expense.model";

@Injectable({
  providedIn: 'root'
})
export class SplitwiseService {
  private urlGroup = environment.apiUrl + 'splitwise/';

  constructor(private httpClient: HttpClient) {
  }

  getCurrentUser() {
    this.httpClient.get(this.urlGroup + 'user')
      .subscribe((response) => {
        console.log(response)
      })
  }

  getGroups(): Observable<GetGroupsResponseModel> {
    return this.httpClient.get<GetGroupsResponseModel>(this.urlGroup + 'groups');
  }

  createExpense(expenseModel: CreateExpenseModel) {
    let expenseBody: any = {
      cost: expenseModel.cost,
      group_id: expenseModel.groupId,
      description: expenseModel.description,
      date: expenseModel.date,
      currency_code: expenseModel.currencyCode,
      split_equally: true
    }

    // for (let i = 0; i < expenseModel.users.length; i++) {
    //   expenseBody['users__' + i + '__user_id'] = expenseModel.users[i].id;
    //   expenseBody['users__' + i + '__paid_share'] = expenseModel.users[i].paidShare;
    //   expenseBody['users__' + i + '__owed_share'] = expenseModel.users[i].owedShare;
    // }

    return this.httpClient.post(this.urlGroup + 'expenses', expenseBody)
  }
}
