let myPromise1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  },6000)
})

let myPromise2 = new Promise((resolve, recject) => {

  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000)
})

/* i kinda realize in here that it waits for the first promise to finish.  BUT IT LOADS ALREADY even if promise 1 isnt finish */
myPromise1
.then((successMessage) => {
  console.log("From Callback " + successMessage);
  myPromise2.then((successMessage) => {
    console.log("From Callback" + successMessage);
  })
})
