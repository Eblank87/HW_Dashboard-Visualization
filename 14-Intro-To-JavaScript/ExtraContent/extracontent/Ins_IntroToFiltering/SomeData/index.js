var $tbody = document.querySelector("tbody");
var $positionInput = document.querySelector("#position");
var $searchButton = document.querySelector("#search");

$searchButton.addEventListener("click", handleSearchButtonClick);

var filteredPigeons = pigeonRacing;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredPigeons.length; i++) {
    var pigeon = filteredPigeons[i];
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < 7; j++) {
      var $cell = $row.insertCell(j);
      if (j === 0) {
        $cell.innerText = pigeon.Pos;
      }
      if (j === 1) {
        $cell.innerText = pigeon.Breeder;
      }
      if (j === 2) {
        $cell.innerText = pigeon.Pigeon;
      }
      if (j === 3) {
        $cell.innerText = pigeon.Color;
      }
      if (j === 4) {
        $cell.innerText = pigeon.Sex;
      }
      if (j === 5) {
        $cell.innerText = pigeon.Arrival;
      }
      if (j === 6) {
        $cell.innerText = pigeon["To Win"];
      }
    }
  }
}

function handleSearchButtonClick() {
  var filterPosition = $positionInput.value;
  if (filterPosition === "") {
    filteredPigeons = pigeonRacing;
  }
  else {
    filteredPigeons = pigeonRacing.filter(function(pigeon) {
      return pigeon.Pos.toString() === filterPosition;
    });
  }
  renderTable();
}

renderTable();
