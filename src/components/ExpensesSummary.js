import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses_total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = ({expensesCount, expensesTotal})=>{
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedAmount = numeral(expensesTotal).format('$0,0.00')
    return (
        <div>
            <h3>Viewing {expensesCount} {expenseWord} totaling {formattedAmount}.</h3>
        </div>
    );
};


const mapStateToProps = (state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);