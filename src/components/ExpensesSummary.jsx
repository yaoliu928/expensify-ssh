import React from "react";
import { connect } from "react-redux";

import getExpensesTotal from '../selectors/expenses-total';

const ExpenseSummary = ({ expenses }) => {
  const expenseCount = expenses.length;
  const expenseTotal = getExpensesTotal(expenses) / 100;
  return (
    <div>
      <p>{expenseCount === 0
        ? `You have no expenses.`
        : `Viewing ${expenseCount} expenses totalling $${expenseTotal}`}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseSummary);