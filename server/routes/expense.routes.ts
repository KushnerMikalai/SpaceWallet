import { Context } from "oak";
import { CreateExpense } from '../types/expense.types.ts'

const createExpense = async (ctx: Context) => {
  const request = ctx.request;
  const expenseBody = await request.body().value as unknown as CreateExpense;


  console.log(expenseBody, 1);

  ctx.response.body = expenseBody;
}
