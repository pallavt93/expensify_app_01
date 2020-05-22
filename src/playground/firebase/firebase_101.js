/*
In Firebase we have reference(ref()) as collection in mongodb 
or tables in sql. 
*/


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

database.ref().set({
      name: 'Pallav Tripathi',
      age: 25,
      isSingle: true,
      location:{
          city: 'Chennai',
          state: 'Tamilnadu'
      }
  });

database.ref('age').set(26);
database.ref('location/city').set('opaline, Chennai');

database.ref('attr').set({
    height: 180,
    weight: 75
});
