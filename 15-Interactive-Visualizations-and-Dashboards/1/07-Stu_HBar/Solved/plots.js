// Sort the data array using the greekSearchResults value
dataInDataJS.sort(function(a, b) {

  return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
});

// Slice the first 10 objects for plotting
dataSliced = dataInDataJS .slice(0, 10);


// Reverse the array due to Plotly's defaults
dataReverse = dataSliced.reverse();

// Trace1 for the Greek Data
var trace1 = {
  x: dataReverse.map(row => row.greekSearchResults),
  y: dataReverse.map(row => row.greekName),
  text: dataReverse.map(row => row.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
