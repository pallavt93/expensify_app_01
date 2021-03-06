/*
Action specify something happened but they don't specify how application changes in response.
This is the job of Reducers.

Reducers Attribute:

1. Reducers are pure functions.
2. Never Directly change state or actions.


*/

import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


//Action generators (Action)

//ADD_EXPENSE
const addExpense = ({ 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
}={})=>{
    return {
        type:'ADD_EXPENSE',
        expense:{
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }

    };
};

//REMOVE_EXPENSE

const removeExpense = ({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
    };

};

//EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
};
//SET_TEXT_FILTER

const setTextFilter = (text = '')=>{
    return {
        type:'SET_TEXT_FILTER',
        text
    };
};
//SORT_BY_DATE

const sortByDate = ()=>{
    return {
        type:"SORT_BY_DATE"
    };
};
//SORT_BY_AMOUNT

const sortByAmount = ()=>{
    return {
        type:"SORT_BY_AMOUNT"
    };
};
//SET_START_DATE

const setStartDate = (startDate=undefined)=>{
    return {
        type:"SET_START_DATE",
        startDate
    };
};
//SET_END_DATE

const setEndDate = (endDate=undefined)=>{
    return {
        type:"SET_END_DATE",
        endDate
    };
};

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            // return state.filter(({ id })=>{ // destructuring expense object for id
            //     return id !== action.id;
            // });
            return state.filter(({ id })=>id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });

        default:
            return state;
    }

};

//Filters Reducer
const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filterReducer = (state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };   
        case 'SET_END_DATE':
            return {
                 ...state,
                endDate: action.endDate
            };      
        default:
            return state;
    }
};


//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount? 1: -1;
        }

    });
};

//store creation

const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filterReducer
}));

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpense);
});


const expenceOne = store.dispatch(addExpense({description:'theey', amount:1000, createdAt: 1000}));
const expenceTwo = store.dispatch(addExpense({description:'that', amount:4000, createdAt: -1000}));

// store.dispatch(removeExpense({id:expenceOne.expense.id}));

// store.dispatch(editExpense(expenceTwo.expense.id, { amount: 3000}));

// store.dispatch(setTextFilter('the'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));


const demoState = {
    expenses: [{
        id:'random',
        description:'January Rent',
        note:'note for the date.',
        amount:1000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', // amount or date
        startDate:undefined,
        endDate:undefined
    }
};

