// import the data from data.js
const tableData = data;


// we need to point our data to our HTML page
// tell JavaScript what type of element the data will be displayed in
// e already know that the data will be displayed in a table,
// so in our code editor we'll reference the tbody HTML tag using D3

// Reference the HTML table using d3
var tbody = d3.select("tbody");
// in code above, we 1) decalred a variable tbody
// 2) Used d3.select to tell JS to look for <tbody> tags in HTML

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// We're building a table, so we'll name the function "buildTable."
// We'll also pass in "data" as the argument
function buildTable(data) {
    tbody.html("");
  }

    // This function works in the same way as a for loop.
    data.forEach((dataRow) => {
      let row = tbody.append("tr"); //tells JS to find the <tbody> tag within the HTML and add a table row ("tr")
      Object.values(dataRow).forEach((val) => {  //  O.v tells JS to reference one object from the array of UFO sightings
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });

    // this function above:
    // 1) Looped through each object in the array
    // 2) Appended a row to the HTML table
    // 3) Added each value from the object into a cell
  
// Clean version end of 11.5.2
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
    
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}