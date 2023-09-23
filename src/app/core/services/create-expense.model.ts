export interface CreateExpenseModel {
  cost: number
  groupId: string
  description: string
  date: Date
  currencyCode: string
  splitEqually: boolean

  users: UserExpenseModel[]
}

export interface UserExpenseModel {
  id: number
  paidShare: string
  owedShare: string
}
