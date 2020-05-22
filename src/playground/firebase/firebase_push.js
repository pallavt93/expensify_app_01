import * as firebase from 'firebase';

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

database.ref('expenses').push({
    description: "rent",
    createdAt: 12,
    note:"",
    amount: 15
});

database.ref('expenses').push({
    description: "gas",
    createdAt: 77889,
    note:"",
    amount: 66
});

database.ref('expenses').push({
    description: "water bill",
    createdAt: 77866,
    note:"",
    amount: 996
});