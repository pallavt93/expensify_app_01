import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';


//Action generators (Action)

// without firebase  
// Component calls action generator
// Action generator returns object
// Component Dispaches Object 
// Redux Store Changes

// with firebase  
// Component calls action generator
// Action generator returns function
// Component Dispaches fuction
// function runs (has the ability to dispatch other actions and do whatever it wants)



//ADD_EXPENSE
// export const addExpense = ({ 
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
// }={})=>{
//     return {
//         type:'ADD_EXPENSE',
//         expense:{
//             id: uuidv4(),
//             description,
//             note,
//             amount,
//             createdAt
//         }

//     };
// };

export const addExpense = (expense)=>{
    return {
        type:'ADD_EXPENSE',
        expense
    };
};

// return a fuction to start addExpense
export const startAddExpense = (expenceData = {}) => {
    return (dispatch) =>{
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenceData;

        const expense = { description, amount, note, createdAt };

        //saving to the database
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });


    };
};

//REMOVE_EXPENSE

export const removeExpense = ({id}={})=>{
    return {
        type:'REMOVE_EXPENSE',
        id
    };

};

export const startRemoveExpense = ({ id } = {})=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        });
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

//SET_EXPENSES
export const setExpenses = (expenses)=>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    //fetching from database
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });

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