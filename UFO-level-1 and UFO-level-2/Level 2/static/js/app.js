// UFO dataset of sightings by Chaim Teitelbaum Colombie Engineering BCS - October 2019 - New York 

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

// start with showing full UFO dataset
console.log(tData);
tLoad(tData);

// Button to filter dataset
var button = d3.select("filter-btn");

// filter dataset
button.on("click", function(event) {
  d3.event.preventDefault();
  console.log('TST')
  deltbody();
  var date = d3.select("#datetime").property("value");
  
  // if no date input show full database
  if (date.trim() === "" ) {
    var tDataFiltere = tData;
  }
  else {
     
    var tDataFiltered = tData.filter(ufoData => 
      ufoData.datetime === date.trim());
  };
  else {
     
    var tDataFiltered = tData.filter(ufoData => 
      ufoData.City === City.trim());
  };
  // if no records found show message 
  if (tDataFiltered.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(tDataFiltered);
  tDisplay(tDataFiltered);
});
