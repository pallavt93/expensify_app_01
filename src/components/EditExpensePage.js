import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense, startEditExpense  } from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.startEditExpense(expense);
        this.props.history.push('/');
    };

    onClick = ()=>{
        this.props.startRemoveExpense(); 
        console.log(this.props.expense);
        this.props.history.push('/');
    };


    render(){
        return (
            <div>
                <ExpenseForm
                    expense = {this.props.expense} 
                    onSubmit = {this.onSubmit}
                />
                <div>
                <button 
                    onClick = {this.onClick}
                >remove
                </button>
                </div>
            </div>
        );
    }
};

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense = {props.expense} 
//                 onSubmit = {(expense)=>{
//                     console.log(expense);
//                     props.dispatch(editExpense(props.match.params.id,expense));
//                     props.history.push('/');
//                 }}
//             />
//             <div>
//             <button 
//                 onClick = {
//                             ()=>{ props.dispatch(removeExpense({ id:props.expense.id })); 
//                                     props.history.push('/');
//                                  }
//                             }
//             >remove
//             </button>
//             </div>
//         </div>
//     );
// }

const mapDispatchToProps = (dispatch,props)=>({
    startEditExpense: (expense)=>dispatch(startEditExpense(props.match.params.id,expense)),
    startRemoveExpense:()=>dispatch(startRemoveExpense({ id:props.match.params.id}))
});

const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
//export default connect(mapStateToProps)(EditExpensePage);