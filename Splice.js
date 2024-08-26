// splice Method
// The splice method changes the contents of an array by removing, replacing, or adding elements. It modifies the original array and can return the removed elements.

// Syntax:

// javascript
// Copy code
// array.splice(start, deleteCount, item1, item2, ...);
// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove.
// item1, item2, ...: The elements to add to the array.
// Examples:

// Removing Elements:

// javascript
// Copy code
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 2); // Removes 2 elements starting from index 2
// console.log(numbers); // Output: [1, 2, 5]
// Adding Elements:

// javascript
// Copy code
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 0, 'orange', 'mango'); // Adds 'orange' and 'mango' at index 1
// console.log(fruits); // Output: ['apple', 'orange', 'mango', 'banana', 'cherry']
// Replacing Elements:

// javascript
// Copy code
// let colors = ['red', 'green', 'blue'];
// colors.splice(1, 1, 'yellow'); // Replaces 1 element at index 1 with 'yellow'
// console.log(colors); // Output: ['red', 'yellow', 'blue']