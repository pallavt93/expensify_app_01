import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        amount:3000,
        description:'rent',
        createdAt:5500,
        note:'rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action object with default values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            note:'',
            description:'',
            createdAt:0,
            amount:0,
            id:expect.any(String)
        }
    });
});