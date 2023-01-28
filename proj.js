$(document).ready(function() {
    // create an empty array to store data
    let data = [];
  
    // submit form to add data to table
    $("form").submit(function(e) {
      e.preventDefault();
  
      // get form values
      let firstName = $("#firstName").val();
      let lastName = $("#lastName").val();
      let contactNumber = $("#contactNumber").val();
  
      // check for duplicates
      let duplicate = data.find(person => {
        return person.firstName === firstName && person.lastName === lastName && person.contactNumber === contactNumber;
      });
  
      // if duplicate, show an alert and return
      if (duplicate) {
        alert("Duplicate entry not allowed!");
        return;
      }
  
      // add new data to array
      data.push({
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber
      });
  
      // clear form values
      $("#firstName").val("");
      $("#lastName").val("");
      $("#contactNumber").val("");
  
      // call the function to update the table
      updateTable();
    });
  
    // function to update the table
    function updateTable() {
      // clear the table
      $("#dataTable tbody").html("");
  
      // loop through data and add rows
  