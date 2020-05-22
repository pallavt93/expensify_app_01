import { startAddExpense,addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { analytics } from 'firebase';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([ thunk ]);

test('should set up remove expense action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should set up edit expense action object',()=>{
    const action = editExpense('123abc',{amount:300,createdAt:3000});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{amount:300,createdAt:3000}
    });
});

test('should set up add expense action object with provided values',()=>{
    const expenseData = expenses[2];
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});


// testing async tasks
test('should add expense to database and store',(done)=>{
    const store = createMockStore({

    });

    const expenseData = {
        description: 'Mouse',
        note: 'some note',
        amount: 3000,
        createdAt: 55660
    };
    
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });

        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
        //     expect(snapshot.val()).toEqual(expenseData);
        //     done();
        // });


        //to wait for async tacks to be completed.

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});

// testing async tasks
test('should add expense with defaults to database and store',()=>{
    const store = createMockStore({

    });

    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });

        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
        //     expect(snapshot.val()).toEqual(expenseData);
        //     done();
        // });


        //to wait for async tacks to be completed.

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test('should set up add expense action object with default values',()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             note:'',
//             description:'',
//             createdAt:0,
//             amount:0,
//             id:expect.any(String)
//         }
//     });
// });