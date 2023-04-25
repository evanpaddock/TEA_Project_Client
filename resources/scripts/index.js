// Define the options for the make and model select elements
var makeOptions = {
  Toyota: ["-- Select Model --", "Camry", "Corolla", "RAV4"],
  Honda: ["-- Select Model --", "Civic", "Accord", "CR-V"],
  Ford: ["-- Select Model --", "Fusion", "Escape", "Explorer"]
};

function populateModels() {
  // Get the selected make and model elements
  var makeSelect = document.getElementById("make");
  var modelSelect = document.getElementById("model");

  // Clear the previous options from the model select element
  modelSelect.innerHTML = "";

  // Get the models for the selected make from the makeOptions object
  var models = makeOptions[makeSelect.value];

  // Add the new model options to the model select element
  for (var i = 0; i < models.length; i++) {
    var option = document.createElement("option");
    option.value = models[i];
    option.text = models[i];
    modelSelect.add(option);
  }
}

function addRow() {
  // Get the make, model, and year from the input fields
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;

  // Create a new table row
  var table = document.getElementById("carTable");
  var row = table.insertRow(-1);

  // Insert the make, model, and year into the new row
  var makeCell = row.insertCell(0);
  var modelCell = row.insertCell(1);
  var yearCell = row.insertCell(2);
  makeCell.innerHTML = make;
  modelCell.innerHTML = model;
  yearCell.innerHTML = year;

  // Reset the input fields
  document.getElementById("make").value = "";
  document.getElementById("model").value = "";
  document.getElementById("year").value = "";
  document.getElementById("model").innerHTML = "<option value=''>-- Select Model --</option>";
}

// Populate the model select element when the make select element is changed
document.getElementById("make").addEventListener("change", populateModels);

var makeOptions = {
  Toyota: ["-- Select Model --", "Camry", "Corolla", "RAV4"],
  Honda: ["-- Select Model --", "Civic", "Accord", "CR-V"],
  Ford: ["-- Select Model --", "Fusion", "Escape", "Explorer"]
};

function populateModels() {
  // Get the selected make and model elements
  var makeSelect = document.getElementById("make");
  var modelSelect = document.getElementById("model");

  // Clear the previous options from the model select element
  modelSelect.innerHTML = "";

  // Get the models for the selected make from the makeOptions object
  var models = makeOptions[makeSelect.value];

  // Add the new model options to the model select element
  for (var i = 0; i < models.length; i++) {
    var option = document.createElement("option");
    option.value = models[i];
    option.text = models[i];
    modelSelect.add(option);
  }
}

function addRow() {
  // Get the make, model, and year from the input fields
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;

  // Create a new table row
  var table = document.getElementById("carTable");
  var row = table.insertRow(-1);

  // Insert the make, model, and year into the new row
  var makeCell = row.insertCell(0);
  var modelCell = row.insertCell(1);
  var yearCell = row.insertCell(2);
  makeCell.innerHTML = make;
  modelCell.innerHTML = model;
  yearCell.innerHTML = year;

  // Reset the input fields
  document.getElementById("make").value = "";
  document.getElementById("model").value = "";
  document.getElementById("year").value = "";
  document.getElementById("model").innerHTML = "<option value=''>-- Select Model --</option>";
}

// Populate the model select element when the make select element is changed
document.getElementById("make").addEventListener("change", populateModels);