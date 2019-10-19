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
  
// start with showing full UFO dataset
console.log(tData);
tLoad(tData);

// Function to clear old data make room for new data
function deltbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// Button to filter dataset
var button = d3.select("#filter-btn");

// filter the dataset
button.on("click", function(event) {
  
  d3.event.preventDefault();
  deltbody();
  
  var tDataFiltered = tData;
  var inpId = document.getElementsByClassName("form-control");
  
  // Loop trough the inputs
  for (var i = 0; i < inpId.length; i++) {
	
	var idName = inpId[i].id;
	var field = d3.select("#" + idName).property("value");
	
	// If white-space search for anything in that field
	if (field.trim() !== "") {
	  var tDataFiltered = tDataFiltered.filter(ufoData =>
	    // change search into uppercase
		ufoData[idName].toUpperCase().trim() ===
		field.toUpperCase().trim());
	};
  };
 
  // Message if no records found
  if (tDataFiltered.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };
  //Return filtered data 
  console.log(tDataFiltered);
  tLoad(tDataFiltered);
});
