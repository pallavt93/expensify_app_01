import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ?
            (
                <p>No Expenses</p>
            )
            : 
            (
                props.expenses.map((expense)=>( <ExpenseListItem { ...expense }  key={expense.id} />) )
            )
        }
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);




/*
const ConnectedExpenseList = connect((state)=>{
    return {
        expenses: state.expenses
    };
})
(ExpenseList);

export default ConnectedExpenseList;
*/