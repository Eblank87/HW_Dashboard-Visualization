# Basic Pagination Demo

In this activity we will demonstrate basic pagination of a table containing 1000 records of address data.

## Instructions

1. Open [index.js](Unsolved/index.js) and a variable named `startingIndex` which should be set to `0` as well as a `resultsPerPage` variable which should be set to `100`.

2. Inside of the `renderTableSection` function, define an `endingIndex` variable which should be set to the value of `startingIndex` + `resultsPerPage`.

3. Using the Array `slice` method, create a new array using the section of the `addressData` array between the indices `startingIndex` and `endingIndex`.

4. Modify the code where the row is inserted into the table so that the index passed is `i` + `startingIndex`.

5. Create an event listener for the button. Inside this function, increase the value of `startingIndex` by the value of `resultsPerPage` and then call the `renderTableSection` function.

## Bonus

* Add code to disable the button when all of the data is loaded to the table and change its inner text to say "All Addresses Loaded"

## Hints

* See MDN Documentation for [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=example)
