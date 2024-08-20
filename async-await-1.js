// Define an async function that simulates asynchronous work
async function simulateAsyncOperation(message, delay) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(message);
      }, delay);
  });
}

// Define an async function to handle the operations concurrently
async function handleAsyncOperations() {
  try {
      // Start both asynchronous operations
      const result1 = simulateAsyncOperation("Operation 1 completed", 6000);
      const result2 = simulateAsyncOperation("Operation 2 completed", 3000);

      // Await the results of both operations
      const resolved1 = await result1;
      console.log(resolved1);  // Output: "Operation 1 completed"

      const resolved2 = await result2;
      console.log(resolved2);  // Output: "Operation 2 completed"
  } catch (error) {
      console.error("An error occurred:", error);
  }
}

// Call the async function
handleAsyncOperations();

/* it waits for the first promise to finish.  BUT IT LOADS ALREADY even if promise 1 isnt finish */
