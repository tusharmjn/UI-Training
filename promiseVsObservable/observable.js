// import { Observable} from 'rxjs';
// import {filter} from 'rxjs/operators';

//Promise
const promise = new Promise((resolve) => {
  console.log("Promise Call.......");
  setTimeout(() => {
    resolve("Promise Working");
    resolve("Promise Working1");
    resolve("Promise Working1");
  }, 1000);
});
promise.then((result) => console.log(result));

//Observable
const observable = rxjs.Observable.create((sub) => {
  console.log("Observable call....");
  setTimeout(() => {
    sub.next("Observable working");
    sub.next("Observable working1");
    sub.next("Observable working2");
  }, 3000);
});

const subscription = observable.subscribe((result) => {
  console.log(result);
});

// observable.pipe(
//     filter (result => result === 'Observable working2'),
// )
// .subscribe(result=>console.log(result))

