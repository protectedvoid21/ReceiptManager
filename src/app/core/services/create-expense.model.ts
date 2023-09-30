export interface CreateExpenseModel {
  cost: string
  groupId: number
  details: string
  description: string
  date: Date
  currencyCode: string
  splitEqually: boolean

  users: UserExpenseModel[]
}

export interface UserExpenseModel {
  userId: number
  paidShare: string
  owedShare: string
}
