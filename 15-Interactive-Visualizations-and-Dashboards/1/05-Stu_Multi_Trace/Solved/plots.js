// Trace1 for the Greek Data
var trace1 = {
  x: dataInDataJS.map(row => row.pair),
  y: dataInDataJS.map(row => row.greekSearchResults),
  text: dataInDataJS.map(row => row.greekName),
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
  x: dataInDataJS.map(row => row.pair),
  y: dataInDataJS.map(row => row.romanSearchResults),
  text: dataInDataJS.map(row => row.romanName),
  name: "Roman",
  type: "bar"
};

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
