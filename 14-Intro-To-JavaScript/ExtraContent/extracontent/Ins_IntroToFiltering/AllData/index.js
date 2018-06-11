// Selectors which we use to modify the HTML and listen for events
var $tbody = document.querySelector("tbody");
var $positionInput = document.querySelector("#position");
var $searchButton = document.querySelector("#search");

// Listens for a click event on our search button and then runs the handelSearchButtonClick function
$searchButton.addEventListener("click", handleSearchButtonClick);

var filteredPigeons = pigeonRacing;

// Function which creates our table when the page initially loads and recreates our table whenever a new search is entered
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredPigeons.length; i++) {
    var pigeon = filteredPigeons[i];
    var fields = Object.keys(pigeon);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = pigeon[field];
    }
  }
}

// Function which runs whenever the search button is clicked
function handleSearchButtonClick() {
  var filterPosition = $positionInput.value;
  // If the search value is empty, the table created will be unfiltered
  if (filterPosition === "") {
    filteredPigeons = pigeonRacing;
  }
  // If the search value exists, we filter out all values in the table that do not match the input and create a table containing the rest
  else {
    filteredPigeons = pigeonRacing.filter(function(pigeon) {
      return pigeon.Pos.toString() === filterPosition;
    });
  }
  renderTable();
}

renderTable();
