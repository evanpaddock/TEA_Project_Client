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
  
  //table 2 stuff below here
  
  var makeOptions2 = {
    Toyota: ["-- Select Model --", "Camry", "Corolla", "RAV4"],
    Honda: ["-- Select Model --", "Civic", "Accord", "CR-V"],
    Ford: ["-- Select Model --", "Fusion", "Escape", "Explorer"]
  };
  
  function populateModels2()
  {
    // Get the selected make and model elements
    var makeSelect = document.getElementById("make");
    var modelSelect = document.getElementById("model");
  
    // Clear the previous options from the model select element
    modelSelect.innerHTML = "";
  
    // Get the models for the selected make from the makeOptions object
    var models = makeOptions2[makeSelect.value];
  
    // Add the new model options to the model select element
    for (var j = 0; j < models.length; j++) {
      var option = document.createElement("option");
      option.value = models[j];
      option.text = models[j];
      modelSelect.add(option);
    }
  }
  
  function addRowTable2()
  {
    // Get the make, model, and year from the input fields
    var make = document.getElementById("make2").value;
    var model = document.getElementById("model2").value;
    var year = document.getElementById("year2").value;
  
    // Create a new table row
    var table = document.getElementById("carTable2");
    var row = table.insertRow(-1);
  
    // Insert the make, model, and year into the new row
    var makeCell = row.insertCell(0);
    var modelCell = row.insertCell(1);
    var yearCell = row.insertCell(2);
    makeCell.innerHTML = make;
    modelCell.innerHTML = model;
    yearCell.innerHTML = year;
  
    // Reset the input fields
    document.getElementById("make2").value = "";
    document.getElementById("model2").value = "";
    document.getElementById("year2").value = "";
    document.getElementById("model2").innerHTML = "<option value=''>-- Select Model --</option>";
  }
  
  document.getElementById("make").addEventListener("change", populateModels2);
  
  
  //save to local storage???
  // Save form data to local storage
  function saveFormData() {
    var make = document.getElementById("make2").value;
    var model = document.getElementById("model2").value;
    var year = document.getElementById("year2").value;
    
    // Create a JavaScript object to store the form data
    var formData = {
      make: make,
      model: model,
      year: year
    };
    
    // Convert the JavaScript object to a JSON string and save it to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
  }
  
  // Retrieve form data from local storage
  function retrieveFormData() {
    // Get the JSON string from local storage and convert it back to a JavaScript object
    var formData = JSON.parse(localStorage.getItem("formData"));
    
    // If the formData object exists, populate the form fields with the saved values
    if (formData) {
      document.getElementById("make2").value = formData.make;
      document.getElementById("model2").value = formData.model;
      document.getElementById("year2").value = formData.year;
    }
  }
  
  // Call the retrieveFormData() function when the page loads to populate the form fields with saved values
  window.onload = function() {
    retrieveFormData();
  };
  
  // Call the saveFormData() function when the user submits the form to save the data to local storage
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    saveFormData();
    this.submit();
  });
  