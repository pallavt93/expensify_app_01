import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense  } from '../actions/expenses';


export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.editExpense(expense);
        this.props.history.push('/');
    };

    onClick = ()=>{
        this.props.removeExpense(); 
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
    editExpense: (expense)=>dispatch(editExpense(props.match.params.id,expense)),
    removeExpense:()=>dispatch(removeExpense({ id:props.match.params.id}))
});

const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
//export default connect(mapStateToProps)(EditExpensePage);