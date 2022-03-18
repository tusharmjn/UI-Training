//PROMISE - 
const pr = new Promise((resolve) => {
    let counter = 0;
    setInterval(() => {
        counter += 1;
        console.log("Inside Set Interval of promise", counter);
        resolve(counter);
    }, 1000);
})
    .then((data) => {
        console.log(data);
    });

//OBSERVABLE    
const ob = rxjs.Observable.create((observer) => {
    let counter = 0;
    let timer=setInterval(() => {
        counter += 1;
        console.log("Inside Set Interval of observable", counter);
        observer.next(counter);
    }, 1000);

    return () => {
        clearInterval(timer);
    }
});
const subscription=ob.subscribe(console.log);

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);










// const promise = new Promise(resolve =>{
//     console.log('Promise Call.......')
//     setTimeout(()=>{
//         resolve('Promise Working');
//         resolve('Promise Working1');
//         resolve('Promise Working1');
//     },1000);
//     });
//     // promise.then(result=>console.log(result));


//      //observable
// const observable = rxjs.Observable.create(sub=>{
//     console.log('Observable call....');
//     let counter = 0;
//     setInterval(()=>{
//         counter = counter +1;
//         sub.next(counter);
//         sub.next('Observable working'); 
//         sub.next('Observable working1'); 
//         sub.next('Observable working2'); 
//     },1000);
// });

// const subscription = observable
//                     .subscribe(result=>{console.log('subscriber count ' + result);
// });

// subscription.unsubscribe();