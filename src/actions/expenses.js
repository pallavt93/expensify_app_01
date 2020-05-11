import { v4 as uuidv4 } from 'uuid';


//Action generators (Action)

//ADD_EXPENSE
export const addExpense = ({ 
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

export const removeExpense = ({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
    };

};

//EDIT_EXPENSE

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
};

/*
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

*/