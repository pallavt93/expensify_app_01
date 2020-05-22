import * as firebase from 'firebase';
import expenses from '../reducers/expenses';

const firebaseConfig = {
    apiKey: "AIzaSyBEF2S2X6XH-d6RU5EDLI9AfhbL0T3S6T8",
    authDomain: "expensify-app-804be.firebaseapp.com",
    databaseURL: "https://expensify-app-804be.firebaseio.com",
    projectId: "expensify-app-804be",
    storageBucket: "expensify-app-804be.appspot.com",
    messagingSenderId: "624087032707",
    appId: "1:624087032707:web:f8d7fe93fbf15e98c04cb6",
    measurementId: "G-25XFXCGDVW"
};

firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const database = firebase.database();

//data change subscription

const onValueChange = database.ref('expenses').on('value',(snapshot)=>{
    const expenses = [];
    snapshot.forEach((childExpense)=>{
        expenses.push({
            id: childExpense.key,
            ...childExpense
        });
    });
    console.log(expenses);
}, (e) => {
    console.log('error : ', e);
});


// Child remove subscription

database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
}, (e) => {
    console.log('error : ', e);
});

// Child change subsciption

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
}, (e) => {
    console.log('error : ', e);
});


// Child change subsciption

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
}, (e) => {
    console.log('error : ', e);
});