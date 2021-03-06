import validator from 'validator';
import React from 'react';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();


// store.dispatch(addExpense({description:'gas', amount: 5522, createdAt: 200}));
// store.dispatch(addExpense({description:'rent', amount: 1000, createdAt: 1000}));
// store.dispatch(addExpense({description:'coffee', amount: 10, createdAt: 2000}));


// console.log(store.getState());

// const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage /> , document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("logged in");
        console.log(user.uid);
        store.dispatch(login(user.uid));
        console.log(history.location.pathname);
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                console.log(user.uid);
                history.push('/dashboard');
            }
        });
    }
    else{
        console.log("logged out");
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




