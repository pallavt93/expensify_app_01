import * as firebase from 'firebase';
import expenses from '../reducers/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

//data change subscription

// const onValueChange = database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childExpense)=>{
//         expenses.push({
//             id: childExpense.key,
//             ...childExpense
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('error : ', e);
// });


// // Child remove subscription

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// }, (e) => {
//     console.log('error : ', e);
// });

// // Child change subsciption

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// }, (e) => {
//     console.log('error : ', e);
// });


// // Child change subsciption

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// }, (e) => {
//     console.log('error : ', e);
// });

// // database.ref().set({
// //       name: 'Pallav Tripathi',
// //       age: 25,
// //       isSingle: true,
// //       location:{
// //           city: 'Chennai',
// //           state: 'Tamilnadu'
// //       }
// //   }).then(()=>{
// //       console.log('data added');
// //   }).catch((e)=>{
// //       console.log('error : ',e);
// //   });


// // with once 

// // database.ref().once('value')
// // .then((snapshot)=>{
// //     const val = snapshot.val();
// //     console.log(val);
// // })
// // .catch((e)=>{
// //     console.log('error ',e)
// // });

// // with on

// // subscribing to on
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('error : ', e);
// // });

// // setTimeout(()=>{
// //     database.ref('age').set(20);
// // },3000);

// // // unsubscribing with on for onValueChange
// // setTimeout(()=>{
// //     database.ref().off('value', onValueChange);
// // },6000);

// // setTimeout(()=>{
// //     database.ref('age').set(25);
// // },9000);








