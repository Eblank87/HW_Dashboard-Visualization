// Get references to the tbody element and button for loading additional results
var $tbody = document.querySelector("tbody");
var $loadMoreBtn = document.querySelector("#load-btn");

// Set a startingIndex and resultsPerPage variable
var startingIndex = 0;
var resultsPerPage = 100;

function renderTableSection() {
  // Set the value of endingIndex to startingIndex + resultsPerPage
  var endingIndex = startingIndex + resultsPerPage;
  // Get a section of the addressData array to render
  var addressSubset = addressData.slice(startingIndex, endingIndex);
  for (var i = 0; i < addressSubset.length; i++) {
    // Get the current address object and its fields
    var address = addressSubset[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i + startingIndex);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Add an event listener to the button, call handleButtonClick when clicked
$loadMoreBtn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  // Increase startingIndex by resultsPerPage, render the next section of the table
  startingIndex += resultsPerPage;
  renderTableSection();
  // Check to see if there are any more results to render
  if (startingIndex + resultsPerPage >= addressData.length) {
    $loadMoreBtn.classList.add("disabled");
    $loadMoreBtn.innerText = "All Addresses Loaded";
    $loadMoreBtn.removeEventListener("click", handleButtonClick);
  }
}

// Render the table for the first time on page load
renderTableSection();
