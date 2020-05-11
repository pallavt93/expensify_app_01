import { createStore } from 'redux';

// Action Generators are function that return action object

//default empty object then incrementBy = 1 as default value if no object is passed.

const incrementCount = ({ incrementBy=1 } = {})=>{
    return {
        type:'INCREMENT',
        incrementBy
    };
};

const setCount = ({count = 101}={})=>{
    return{
        type:'SET',
        count
    }
};

const store = createStore((state = {count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrement = typeof action.decreaseBy === 'number' ? action.decreaseBy : 1;
            return {
                count : state.count - decrement
            };
        case 'SET':
            return {
                count:action.count
            }    
        case 'RESET':
            return {
                count : 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

console.log(store.getState());

store.dispatch(incrementCount({incrementBy:10}));

console.log('----');

store.dispatch(incrementCount());

console.log('----');

// store.dispatch({
//     type:'INCREMENT'
// });

unsubscribe();

console.log(store.getState());

store.dispatch({
    type:'DECREMENT',
    decreaseBy:5
});

console.log(store.getState());

// store.dispatch({
//     type:'SET',
//     count:101
// });

store.dispatch(setCount({count:23}));
console.log(store.getState());

store.dispatch(setCount());
console.log(store.getState());

console.log(store.getState());

store.dispatch({
    type:'RESET'
});

console.log(store.getState());



