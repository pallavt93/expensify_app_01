import selectExpensesTotal from '../../selectors/expenses_total';
import expenses from '../fixtures/expenses';

test('should return total sum expenses',()=>{
    const sum = selectExpensesTotal(expenses);
    console.log("sum = ", sum);
    expect(sum).toBe(expenses[0].amount + expenses[1].amount +  expenses[2].amount)
});

test('should return single sum expenses',()=>{
    const sum = selectExpensesTotal([expenses[0]]);
    console.log("sum = ", sum);
    expect(sum).toBe(expenses[0].amount)
});

test('should return 0 if no expense',()=>{
    const sum = selectExpensesTotal([]);
    console.log("sum = ", sum);
    expect(sum).toBe(0)
});