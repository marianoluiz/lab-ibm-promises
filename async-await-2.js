  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 6000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 3000);
  });


async function handlePromise1() {
  const result1 = await promise1;
  console.log("From Callback " + result1);
}

async function handlePromise2() {
  const result2 = await promise2;
  console.log("From Callback " + result2);
}

// Call the async function
handlePromise1();
handlePromise2();