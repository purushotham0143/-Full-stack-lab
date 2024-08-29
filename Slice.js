// slice Method
// The slice method returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.

// Syntax:

// javascript
// Copy code
// array.slice(start, end);
// start: The beginning index (inclusive). If omitted, it defaults to 0.
// end: The ending index (exclusive). If omitted, it defaults to the length of the array.
// Examples:

// Basic Usage:

// javascript
// Copy code
// let animals = ['cat', 'dog', 'elephant', 'tiger'];
// let slicedAnimals = animals.slice(1, 3) ;// Slices elements from index 1 to 3 (exclusive)
// console.log(slicedAnimals); // Output: ['dog', 'elephant']
// console.log(animals); // Original array remains unchanged: ['cat', 'dog', 'elephant', 'tiger']
// Omitting end Parameter:

// javascript
// Copy code
// let numbers = [10, 20, 30, 40, 50];
// let slicedNumbers = numbers.slice(2); // Slices from index 2 to the end
// console.log(slicedNumbers); // Output: [30, 40, 50]
// Negative Indices:

// javascript
// Copy code
// let letters = ['a', 'b', 'c', 'd', 'e'];
// let slicedLetters = letters.slice(-3, -1); // Slices from 3rd from last to 2nd from last
// console.log(slicedLetters); // Output: ['c', 'd']
// Key Differences:

// splice modifies the original array and can add, remove, or replace elements.
// slice does not modify the original array and returns a new array with the specified elements.