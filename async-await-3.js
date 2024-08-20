async function handlePromises() {
  // Define and start both promises concurrently
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

  try {
    // Await all promises to resolve concurrently
    const [result1, result2] = await Promise.all([promise1, promise2]);
    console.log("From Callback " + result1);
    console.log("From Callback " + result2);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the async function
handlePromises();
