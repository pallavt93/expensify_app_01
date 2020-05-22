// Creation of a promise
// we get that through api
const promise = new Promise((resolve, rejects)=>{
    setTimeout(()=>{
        resolve('this is success message');
    },5000);
});


const promiseFail = new Promise((resolve, rejects)=>{
    setTimeout(()=>{
        rejects('this is failiure message');
    },5000);
});

//use of promise

console.log('before');

//success with promise chaining
// returning simple string value for first passing in second

promise.then((data)=>{
    console.log(1,data);
    return 'some data';
}).then((str)=>{
    console.log("this is promise chaining.",str);
});


//success with promise chaining
// returning  promise in second

promise.then((data)=>{
    console.log(1,data);
    
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve('this is success message');
        },5000);
    });    

}).then((data)=>{
    console.log("this is promise chaining.",data);
});





promise.then((data)=>{
    console.log(2,data);
});

promiseFail.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log('error : ',error);
});

promiseFail.then((data)=>{
    console.log(data)
}, (error)=>{
    console.log('error : ',error);
});

console.log('after');