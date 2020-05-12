//export default (expenses)=> expenses.map((expense)=>{expense.amount});

export default (expenses)=> {
    return expenses.length > 0 ? expenses.map((expense)=>expense.amount).reduce((result,item)=>result + item ,0) : 0;
}