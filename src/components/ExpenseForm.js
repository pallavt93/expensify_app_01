import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

console.log(now.format());

export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: "",
            note: props.expense ? props.expense.note: "",
            amount: props.expense ? props.expense.amount.toString(): "",
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocused: false,
            error: ""
        };
    }

    // state = {
    //     description: "",
    //     note: "",
    //     amount:"",
    //     createdAt: moment(),
    //     calenderFocused: false,
    //     error: ""
    // };

    onChangeDescription = (e)=>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    };

    onChangeNote = (e)=>{
        const note = e.target.value;
        this.setState(()=>({ note }));
    };

    onChangeAmount = (e)=>{
        const amount = e.target.value;
        if (!amount || amount.match( /^\d{1,}(\.\d{0,2})?$/) ){
            this.setState(()=>({ amount }));
        }
        
    };

    onDateChange = (createdAt)=>{
        if(createdAt)
        {
            this.setState(()=>({ createdAt }));
        }
        
    };

    onFocusChange = ({ focused })=>{
        this.setState(()=>({ calenderFocused: focused }))
    };

    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: 'Please add valid description and amount'}));
        }
        else{
            this.setState(()=>({error: ''}));
            console.log("this is working...");
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="enter description" autoFocus
                        value={this.state.description} onChange={this.onChangeDescription}
                    />

                    <input type="text" placeholder="enter amount"
                        value={this.state.amount} onChange={this.onChangeAmount} 
                    />

                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>{false}}
                    />

                    <textarea placeholder="add a note for your expense"
                        value={this.state.note} onChange={this.onChangeNote}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}