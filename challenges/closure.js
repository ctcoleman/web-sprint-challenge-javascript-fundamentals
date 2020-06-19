// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* Because of closure the nestedFunction has access to the global scope, the myFunction scope, and nestedFunction scope. myFunctions scope only extends as far as the global scope and it's scope. It can't reach into nestedFunction and pull up a variable. It relies on nestedFunctions return statement to 'pull' information from nestedFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return sum
}

console.log(summation(4))