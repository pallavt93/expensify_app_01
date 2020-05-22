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

// database.ref().set({
//       name: 'Pallav Tripathi',
//       age: 25,
//       isSingle: true,
//       location:{
//           city: 'Chennai',
//           state: 'Tamilnadu'
//       }
//   }).then(()=>{
//       console.log('data added');
//   }).catch((e)=>{
//       console.log('error : ',e);
//   });


// with once 

// database.ref().once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log('error ',e)
// });

// with on

// subscribing to on
// Call back not promise because promise works only once.

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('error : ', e);
});

setTimeout(()=>{
    database.ref('age').set(20);
},3000);

// unsubscribing with on for onValueChange
setTimeout(()=>{
    database.ref().off('value', onValueChange);
},6000);

setTimeout(()=>{
    database.ref('age').set(25);
},9000);








