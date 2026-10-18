// Your task:
// 1. Create an async function called getUsers().
// 2. Use fetch() to request the users endpoint.
// 3. Convert the response to JSON.
// 4. Log each user's name and email.
// 5. Handle errors with try/catch.

export const getUsers = async () => {
  console.log("Starting request...");
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  console.log("Response Received!");
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  } else {
    throw new Error(response.status);
  }
};
