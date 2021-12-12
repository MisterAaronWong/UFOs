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


function handleClick() {
  let date = d3.select("#datetime").property("value"); // sellect() func selects 1st element that matches our selector string "#datetime".
}                                                       // the selector string is the item we're telling D3.js to look for
// d3.select("#datetime") tells d3 to look for the #datetime id in the HTML tags

// set a default filter and save it to a new variable
// default filter will be the original table data b/c we want users to refine their search on their own terms
let filteredData = tableData;
// tableData is the original data as imported from the data.js file
// by setting the filteredData variable to our raw data, we're basically using it as a blank slate
// The function we're working on right now will be run each time the filter button is clicked on the website
// If no date has been entered as a filter, then all of the data will be returned instead
// The next step is to check for a date filter using an if statement.

// We want JavaScript to check for a date.
// If one is present, we want it to return only the data with that date
// We’re applying a filter to our data based on a date value.
if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};                                // ^ This line is what applies the filter to the table data
// Basically says: "Show only the rows where the date is equal to the date filter we created above."

// The triple equal signs test for equality, meaning that the date in the table has to match our filter exactly.            

// full handleClick() function if we pass the filteredData
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// listen for the event (click)
d3.selectAll("#filter-btn").on("click", handleClick);

// build final table
// creates a basic table filled with row upon row of unfiltered data pulled straight from our array
buildTable(tableData);

// all together code
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);