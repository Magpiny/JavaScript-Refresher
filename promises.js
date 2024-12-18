// Asynchronus programming in JS
//1: PROMISE
// The promise object takes a function as its argument.
// The function takes two parameters, resolve(res) and reject(rej)
// resolve is called when everything is successful otherwise reject is called
// reject function acts as a catch block
const doSomething = new Promise((resolve, reject) => {
  //some code
  const success = "ok"; /* ... */
  if (success) {
    resolve("ok");
  } else {
    reject("this error occurred");
  }
});
print(doSomething); // Promise { <state>: "fulfilled", <value>: "ok" }

// ASYNC/AWAIT
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("some data"), 2000);
  });
};

//
const doAnotherthing = async () => {
  const data = await getData();
  console.log(data);
};

// here's how you would get a JSON resource using the Fetch
// API, and parse it, using promises:
const getFirstUserData = async () => {
  // get users list
  const response = await fetch("/users.json");
  // parse JSON
  const users = await response.json();
  // pick first user
  const user = users[0];
  // get user data
  const userResponse = await fetch(`/users/${user.name}`);
  // parse JSON
  const userData = await user.json();
  return userData;
};
