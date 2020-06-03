import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses_total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = ({expensesCount, expensesTotal})=>{
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedAmount = numeral(expensesTotal).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totaling <span>{formattedAmount}</span>.</h3>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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