// Get expenses total
const getExpensesTotal = (expenses) => {
  if (expenses.length === 0) {
    return 0
  } else {
    const sumOfAllAmountsInPennies = expenses
    .map((expense) => expense.amount)
    .reduce((a, b) => {
      return a += b;
    });
    const sumOfAllAmountsInDollars = sumOfAllAmountsInPennies / 100;
    return sumOfAllAmountsInDollars;
  }
}

export default getExpensesTotal;
