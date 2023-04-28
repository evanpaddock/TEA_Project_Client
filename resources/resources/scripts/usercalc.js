const url = `https://localhost:7106/api/`
const data = []

function handleOnLoad(){
  DropDown1()
  DropDown2()
}

function DropDown1(){
const makeSelect = document.getElementById('make')
const modelSelect = document.getElementById('model')
const yearSelect = document.getElementById('year')

//event listeners

makeSelect.addEventListener('change', onMakeChanged)
modelSelect.addEventListener('change', onModelChanged)

//populate the make with options
fetch(`${url}Car`)
  .then(response => response.json())
  .then(cars => {
    
    const makes = [...new Set(cars.map(car => car.make))]

      const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.text = '-- Select Make --'
    makeSelect.appendChild(defaultOption)

    makes.forEach(make => {
      const option = document.createElement('option')
      option.make = make
      option.text = make
      makeSelect.appendChild(option)
    })
  })
  .catch(error => console.error('Error retrieving make values', error))

  function onMakeChanged(){
    clearSelect(modelSelect)
    clearSelect(yearSelect)

    const make = makeSelect.value

  
  fetch(`${url}Car`)
    .then(response => response.json())
    .then(cars => {
    
    const models = [...new Set(cars.filter(car => car.make === make).map(car => car.model))]
    
    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.text = '-- Select Model --'
    modelSelect.appendChild(defaultOption)

    models.forEach(model => {
      const option = document.createElement('option')
      option.value = model
      option.text = model
      modelSelect.appendChild(option)
    })
  })
  //.catch(error = console.error('Error retreiving model values', error))
}

function onModelChanged(){
  clearSelect(yearSelect)

  const make = makeSelect.value
  const model = modelSelect.value

  fetch(`${url}Car`)
    .then(response => response.json())
    .then(cars =>{

      const years = [...new Set(cars.filter(car => car.make === make && car.model === model).map(car => car.year))]

      const defaultOption = document.createElement('option')
      defaultOption.value = ''
      defaultOption.text = '-- Select Year --'
      yearSelect.appendChild(defaultOption)

      //adding year options
      years.forEach(year => {
        const option = document.createElement('option')
        option.value = year
        option.text = year
        yearSelect.appendChild(option)
      })
    })
    .catch(error => console.error('Error retrieving year values', error))
}
}
//------------------------------------------------------------------------------------------------------------------------------------------------

function DropDown2(){
const makeSelect2 = document.getElementById('make2')
const modelSelect2 = document.getElementById('model2')
const yearSelect2 = document.getElementById('year2')

//event listeners

makeSelect2.addEventListener('change', onMakeChanged)
modelSelect2.addEventListener('change', onModelChanged)

//populate the make with options
fetch(`${url}Car`)
  .then(response => response.json())
  .then(cars => {
    
    const makes = [...new Set(cars.map(car => car.make))]

      const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.text = '-- Select Make --'
    makeSelect2.appendChild(defaultOption)

    makes.forEach(make => {
      const option = document.createElement('option')
      option.make = make
      option.text = make
      makeSelect2.appendChild(option)
    })
  })
  .catch(error => console.error('Error retrieving make values', error))

  function onMakeChanged(){
    clearSelect(modelSelect2)
    clearSelect(yearSelect2)

    const make = makeSelect2.value

  
  fetch(`${url}Car`)
    .then(response => response.json())
    .then(cars => {
    
    const models = [...new Set(cars.filter(car => car.make === make).map(car => car.model))]
    
    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.text = '-- Select Model --'
    modelSelect2.appendChild(defaultOption)

    models.forEach(model => {
      const option = document.createElement('option')
      option.value = model
      option.text = model
      modelSelect2.appendChild(option)
    })
  })
  //.catch(error = console.error('Error retreiving model values', error))
}

function onModelChanged(){
  clearSelect(yearSelect2)

  const make = makeSelect2.value
  const model = modelSelect2.value

  fetch(`${url}Car`)
    .then(response => response.json())
    .then(cars =>{

      const years = [...new Set(cars.filter(car => car.make === make && car.model === model).map(car => car.year))]

      const defaultOption = document.createElement('option')
      defaultOption.value = ''
      defaultOption.text = '-- Select Year --'
      yearSelect2.appendChild(defaultOption)

      //adding year options
      years.forEach(year => {
        const option = document.createElement('option')
        option.value = year
        option.text = year
        yearSelect2.appendChild(option)
      })
    })
    .catch(error => console.error('Error retrieving year values', error))

  }

}

function addRow(){
  const make = document.getElementById('make').value
  const model = document.getElementById('model').value
  const year = document.getElementById('year').value
  
  fetch(`${url}Car`)
      .then(response => response.json())
      .then(cars =>{
  
  const car = cars.find(car => car.make === make && car.model === model && car.year === year)
  console.log(car)
  
  console.log(car.carID)
  let tableHtml = `
  <table class="table table-hover">
  <thead>
      <tr>
      <th scope="col">Make</th>
      <th scope="col">Model</th>
      <th scope="col">Year</th>
      <th scope="col">Trim</th>
      <th scope="col">Gas Mileage</th>
      <th scope="col">Tank Size</th>
      <th scope="col">Fuel Type</th>
      <th scope="col">Horse Power</th>
      <th scope="col">Torque</th>
      <th scope="col">Transmission</th>
      <th scope="col"></th>
      <th scope="col"></th>
      </tr>
  </thead>
  <tbody>
`;
    tableHtml += `<tr class="table-dark">
        
        <td>${car.trim}</td>
        <td>${car.gas_Mileage}</td>
        <td>${car.tank_Size}</td>
        <td>${car.fuel_Type}</td>
        <td>${car.horsePower}</td>
        <td>${car.torque}</td>
        <td>${car.transmission}</td>
        

      </tr>
      `;
      tableHtml += `
      </tbody>
  </table>
  `;
return tableHtml;

    })
    
  
  
  }

function addRowTable2(){
  const make = document.getElementById('make2').value
  const model = document.getElementById('model2').value
  const year = document.getElementById('year2').value
  
  fetch(`${url}Car`)
      .then(response => response.json())
      .then(cars =>{
  
  const car = cars.find(car => car.make === make && car.model === model && car.year === year)
  console.log(car)
  
  console.log(car.carID)
  const tableHtml = createTable(car);
        document.getElementById("carTable2").innerHTML = tableHtml;

    })
  }


function clearSelect(selectElement) {
  while(selectElement.options.length > 0 ) {
    selectElement.remove(0);
  }
}


function createTable(car){
  let tableHtml = `
      <table class="table table-hover">
      <thead>
          <tr>
          <th scope="col">Trim</th>
          <th scope="col">Gas Mileage</th>
          <th scope="col">Tank Size</th>
          <th scope="col">Fuel Type</th>
          <th scope="col">Horse Power</th>
          <th scope="col">Torque</th>
          <th scope="col">Transmission</th>
          </tr>
      </thead>
      <tbody>
  
     <tr class="table-dark">
      <td>${car.trim}</td>
      <td>${car.gas_Mileage}</td>
      <td>${car.tank_Size}</td>
      <td>${car.fuel_Type}</td>
      <td>${car.horsePower}</td>
      <td>${car.torque}</td>
      <td>${car.transmission}</td>

    </tr>

   
          </tbody>
      </table>
      `;
  return tableHtml;
}


function addTable(){
  const make = document.getElementById('make').value
  const model = document.getElementById('model').value
  const year = document.getElementById('year').value
  
  fetch(`${url}Car`)
      .then(response => response.json())
      .then(cars =>{
  
  const car = cars.find(car => car.make === make && car.model === model && car.year === year)
  const tableHtml = createTable(car);
        document.getElementById("carTable").innerHTML = tableHtml;

    })


}



// Define the options for the make and model select elements
// var makeOptions = {
//     Toyota: ["-- Select Model --", "Camry", "Corolla", "RAV4"],
//     Honda: ["-- Select Model --", "Civic", "Accord", "CR-V"],
//     Ford: ["-- Select Model --", "Fusion", "Escape", "Explorer"]
//   };
  
//   function populateModels() {
//     // Get the selected make and model elements
//     var makeSelect = document.getElementById("make");
//     var modelSelect = document.getElementById("model");
  
//     // Clear the previous options from the model select element
//     modelSelect.innerHTML = "";
  
//     // Get the models for the selected make from the makeOptions object
//     var models = makeOptions[makeSelect.value];
//     var models = makeOptions[makeSelect.value];
  
//     // Add the new model options to the model select element
//     for (var i = 0; i < models.length; i++) {
//       var option = document.createElement("option");
//       option.value = models[i];
//       option.text = models[i];
//       modelSelect.add(option);
//     }
//   }
  
//   function addRow() {
//     // Get the make, model, and year from the input fields
//     var make = document.getElementById("make").value;
//     var model = document.getElementById("model").value;
//     var year = document.getElementById("year").value;

//     // Check if any fields are blank
//     if (!make || !model || !year) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     // Create a new table row
//     var table = document.getElementById("carTable");
//     var row = table.insertRow(-1);
  
//     // Insert the make, model, and year into the new row
//     var makeCell = row.insertCell(0);
//     var modelCell = row.insertCell(1);
//     var yearCell = row.insertCell(2);
//     makeCell.innerHTML = make;
//     modelCell.innerHTML = model;
//     yearCell.innerHTML = year;
  
//     // Reset the input fields
//     document.getElementById("make").value = "";
//     document.getElementById("model").value = "";
//     document.getElementById("year").value = "";
//     document.getElementById("model").innerHTML = "<option value=''>-- Select Model --</option>";
//   }
  
//   // Populate the model select element when the make select element is changed
//   document.getElementById("make").addEventListener("change", populateModels);
  
//   //table 2 stuff below here
  
//   var makeOptions2 = {
//     Toyota: ["-- Select Model --", "Camry", "Corolla", "RAV4"],
//     Honda: ["-- Select Model --", "Civic", "Accord", "CR-V"],
//     Ford: ["-- Select Model --", "Fusion", "Escape", "Explorer"]
//   };
  
//   function populateModels2()
//   {
//     // Get the selected make and model elements
//     var makeSelect = document.getElementById("make");
//     var modelSelect = document.getElementById("model");
  // function populateModels2()
  // {
  //   // Get the selected make and model elements
  //   var makeSelect = document.getElementById("make2");
  //   var modelSelect = document.getElementById("model2");
  
//     // Clear the previous options from the model select element
//     modelSelect.innerHTML = "";
  
//     // Get the models for the selected make from the makeOptions object
//     var models = makeOptions2[makeSelect.value];
    // Get the models for the selected make from the makeOptions object
    // var models = makeOptions2[makeSelect.value];
    // var models = makeOptions2[makeSelect.value];
  
//     // Add the new model options to the model select element
//     for (var j = 0; j < models.length; j++) {
//       var option = document.createElement("option");
//       option.value = models[j];
//       option.text = models[j];
//       modelSelect.add(option);
//     }
//   }
  
//   function addRowTable2()
//   {
//     // Get the make, model, and year from the input fields
//     var make = document.getElementById("make2").value;
//     var model = document.getElementById("model2").value;
//     var year = document.getElementById("year2").value;

//     // Check if any fields are blank
//     if (!make || !model || !year) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     // Create a new table row
//     var table = document.getElementById("carTable2");
//     var row = table.insertRow(-1);
  
//     // Insert the make, model, and year into the new row
//     var makeCell = row.insertCell(0);
//     var modelCell = row.insertCell(1);
//     var yearCell = row.insertCell(2);
//     makeCell.innerHTML = make;
//     modelCell.innerHTML = model;
//     yearCell.innerHTML = year;
  
//     // Reset the input fields
//     document.getElementById("make2").value = "";
//     document.getElementById("model2").value = "";
//     document.getElementById("year2").value = "";
//     document.getElementById("model2").innerHTML = "<option value=''>-- Select Model --</option>";
//   }
  
//   document.getElementById("make").addEventListener("change", populateModels2);
  
  
//   //save to local storage???
//   // Save form data to local storage
//   // function saveFormData() {
//   //   var make = document.getElementById("make2").value;
//   //   var model = document.getElementById("model2").value;
//   //   var year = document.getElementById("year2").value;
    
//   //   // Create a JavaScript object to store the form data
//   //   var formData = {
//   //     make: make,
//   //     model: model,
//   //     year: year
//   //   };
    
//   //   // Convert the JavaScript object to a JSON string and save it to local storage
//   //   localStorage.setItem("formData", JSON.stringify(formData));
//   // }
  
//   // // Retrieve form data from local storage
//   // function retrieveFormData() {
//   //   // Get the JSON string from local storage and convert it back to a JavaScript object
//   //   var formData = JSON.parse(localStorage.getItem("formData"));
    
//   //   // If the formData object exists, populate the form fields with the saved values
//   //   if (formData) {
//   //     document.getElementById("make2").value = formData.make;
//   //     document.getElementById("model2").value = formData.model;
//   //     document.getElementById("year2").value = formData.year;
//   //   }
//   // }
  
//   // // Call the retrieveFormData() function when the page loads to populate the form fields with saved values
//   // window.onload = function() {
//   //   retrieveFormData();
//   // };
  
//   // // Call the saveFormData() function when the user submits the form to save the data to local storage
//   // document.getElementById("myForm").addEventListener("submit", function(event) {
//   //   event.preventDefault();
//   //   saveFormData();
//   //   this.submit();
//   // });
  // Call the saveFormData() function when the user submits the form to save the data to local storage
  // document.getElementById("myForm").addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   saveFormData();
  //   this.submit();
  // });
  