// UFO dataset of sightings

// from data.js
var tData = data;

// function to load dataset
function tLoad(ufoData) {
  var tbody = d3.select("tbody");
  ufoData.forEach((ufoDataset) => {
    var row = tbody.append("tr");
    Object.entries(ufoDataset).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// Function to clear old data make room for new data
function deltbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// initial display of all UFO sightings
console.log(tData);
tLoad(tData);

// Filter button
var button = d3.select("#filter-btn");

// filter database
button.on("click", function(event) {
  d3.event.preventDefault();
  deltbody();
  var dateInput = d3.select("#datetime").property("value");
  
  // if no date input show full database
  if (dateInput.trim() === "" ) {
    var tDataFiltere = tData;
  }
  else {
     
    var tDataFiltered = tData.filter(ufoData => 
      ufoData.datetime === dateInput.trim());
  };

  // if no records found show message 
  if (tDataFiltere.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(tDataFiltere);
  tDisplay(tDataFiltere);
});
