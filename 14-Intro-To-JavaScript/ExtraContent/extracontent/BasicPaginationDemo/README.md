# Basic Pagination Demo

In this activity we will demonstrate basic pagination of a table containing 1000 records of address data.

## Instructions

1. Open [index.html](index.html) and study the table's functionality. 100 records are loaded at a time. But when we scroll to the bottom of the page, we have the option to click a button to load up to 100 more addresses. When no more addresses are left, the button is disabled and displays a message explaining there is no more data to load.

2. Open [index.js](index.js) and go over the code. First we get references to the button and the table body. Then we set a `startingIndex` variable to `0` and a `resultsPerPage` variable to be `100`. 

3. `renderTableSection` renders the current section of the data to the table. `endingIndex` is calculated by adding `startingIndex` to `resultsPerPage`. We get an up to 100 element slice of `addressData` (the entire data set) and store it in `addressSubset`. We render the data inside of each object in `addressSubset` to the table body. The major thing to note here is that the index of each row is set to `i` (the current index of `addressSubset`) + `startingIndex`, since every time the button is clicked, we want to continue adding rows where we left off.

* The Array `slice` method returns a new array from the array it's called on. The first argument passed is the index of the original array we should start with. The second argument passed is the index of the original array which should be the last element in the new sliced array.

4. Down below, we add an event listener to the button. When clicked, we increase the `startingIndex` by the `resultsPerPage` value and then call `renderTableSection` to render the next slice of data. Then we check if `startingIndex + resultsPerPage` is more than the length of `addressData`. If this is true, then all of the data had been loaded and we update the button text, give the button class of `disabled`, and remove the event listener on the button.
