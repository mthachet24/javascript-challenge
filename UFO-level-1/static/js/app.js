//JavaScript Challenge



// from data.js
var tableData = data;
//reference table body
var tbody = d3.select("tbody");

// CReate a loop 
data.forEach(sightings => {

  //append one table row
  var one_row = tbody.append("tr");

  //Use the Object.entries function 
  Object.entries(sightings).forEach(([key, value]) => {

    // D append a cell to the row for each value
    var cell = one_row.append("td");

    cell.text(value);
  });
});


// need a varibale that references the data.js file
var sightings = data;

// now need to reference the datetime element
var clicked_on_button = d3.select("#datetime");

// perform the .on function by using the clicked_on_button
clicked_on_button.on("change it", function () {
  // Now remove tables
  var brand_new_table = d3.select("tbody").selectAll("tr").remove()

  // node
  var brand_new_input = d3.event.target.value;

  
  if (brand_new_input === '') {
    
    var the_filtered_sightings = sightings;
  }
  else {
    // put it according to the date
    var the_filtered_Sightings = sightings.filter(sightings => sightings.datetime === brand_new_input);
  }

  // Need to create a loop for the filteried sightings!
  the_filtered_Sightings.forEach(sightings => {

    // now you have to apend the rows and use tr for the objects
    var one_row = tbody.append("tr");

    // Use Object.entries function for the sightings
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = one_row.append("td");
      cell.text(value);
    });
  });
});






























