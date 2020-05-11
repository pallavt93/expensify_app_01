import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component{
    state = {
        calenderFocused:null
    };

    onDatesChange = ({startDate,endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calenderFocused)=>{
        this.setState(()=>({ calenderFocused }));
    };

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=>{
        const sortBy = e.target.value;
        if(sortBy === 'date') this.props.sortByDate();
        else if(sortBy === 'amount') this.props.sortByAmount()
    };

    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate= {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
        ); 
    }
}

// const ExpenseListFilters = (props)=>(
//     <div>
//         <input type="text" value={props.filters.text} onChange={(e)=>{
//             props.dispatch(setTextFilter(e.target.value));
//         }}/>
//         <select value={props.filters.sortBy} onChange={(e)=>{
//             const sortBy = e.target.value;
//             if(sortBy === 'date') props.dispatch(sortByDate());
//             else if(sortBy === 'amount') props.dispatch(sortByAmount())
//         }}>
//             <option value='date'>Date</option>
//             <option value='amount'>Amount</option>
//         </select>
//     </div>
// ); 

const mapStatetoProps = (state)=>{
    return {
        filters: state.filters
    };
};

const mapDisPatchToProps = (dispatch)=>({
    setTextFilter: (text)=>dispatch(setTextFilter(text)),
    sortByDate: ()=>dispatch(sortByDate()),
    sortByAmount: ()=>dispatch(sortByAmount()),
    setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=>dispatch(setEndDate(endDate))
});

export default connect(mapStatetoProps, mapDisPatchToProps)(ExpenseListFilters);