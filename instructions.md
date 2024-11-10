Title: Move Zeroes Algorithm Challenge
Objective:
In this coding exercise, you will create a JavaScript function to move all zeroes to the end of an array while maintaining the relative order of the non-zero elements. You are advised to use a for...of loop for this challenge.

Create a function named `moveZeroes(arr)` that takes an array of integers as input and returns the modified array where all zeroes are moved to the end.

When using the following input:
```js
const arr = [0, 2, 0, 5, 7, 0, 1];
console.log(`Original array: [${arr}]`);
console.log(`Array after moving zeroes: [${moveZeroes(arr)}]`);
```

For example, after implementing the function, you should be able to produce the following output:
```js
Original array: [0, 2, 0, 5, 7, 0, 1]
Array after moving zeroes: [2, 5, 7, 1, 0, 0, 0]
```

Helpful resources:
- The for...of loop documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<details>
<summary>Hints</summary>
  
1. Create a function `moveZeroes(arr)` that accepts an array `arr`.
2. Initialize an empty array named `result` to store the modified array.
3. Use a for...of loop to iterate through each element of the input array `arr`.
4. Inside the loop, check if the current element is not equal to zero.
5. If it's not zero, push the element to the `result` array.
6. After the loop, use another loop or a `while` loop to append the necessary number of zeroes to the `result` array to match the count of zeroes in the original array.
7. Return the `result` array.
8. Call the function with an appropriate input array and log the original array and the modified array using template literals.
9. Make sure to use camel case for variable names.
10. Use template literals when logging the output to the console.
</details>