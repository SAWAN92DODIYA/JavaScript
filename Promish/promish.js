// Function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    // Simulate a network delay
    setTimeout(() => {
      const success = true; // Change to false to simulate an error
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 2000);
  });
}

// Using the promise
fetchData()
  .then((result) => {
    console.log(result); // Logs "Data fetched successfully!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs the error message if rejected
  })
  .finally(() => {
    console.log("Fetch operation complete."); // Always executes
  });
