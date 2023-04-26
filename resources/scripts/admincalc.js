const url = `https://localhost:7106/api/`
const data = []



function handleOnLoad(){
    getData()
}

const getData = function() {
    fetch(url + "Car")
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        const tableHtml = createTable(data);
        document.getElementById("table-container").innerHTML = tableHtml;
    })
}





const addCarBtn = document.getElementById("add-car-btn");
addCarBtn.addEventListener("click", () => {
  const make = prompt("Enter car make:");
  const model = prompt("Enter car model:");
  const year = parseInt(prompt("Enter car year:"));
  
});


  function createTable(data){
    let tableHtml = `
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Dark</th>
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
    data.forEach((car) => {
      console.log(car)
        if(car.deleted != true){
          console.log("inside if")
        tableHtml += `<tr class="table-dark">
        <td>${car.carID}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>${car.trim}</td>
        <td>${car.gas_Mileage}</td>
        <td>${car.tank_Size}</td>
        <td>${car.fuel_Type}</td>
        <td>${car.horsePower}</td>
        <td>${car.torque}</td>
        <td>${car.transmission}</td>
        <div><td><button id="adminedit-${car.carID}" type="submit" class="btn btn-primary">Edit</button></td></div>
        <td><button id="admindelete" type="submit" class="btn btn-danger">Delete</button></td>

      </tr>
    `;
          console.log("")
      }    
    });

    tableHtml += `
            </tbody>
        </table>
        `;
    return tableHtml;
  }

  
  function handleEdit(carID){
    let form = document.getElementById("adminedit")
    console.log("inside edit")
    console.log(carID)
    
    form.addEventListener("submit", async function(e){
      e.preventDefault()
      
      const carIDupdated = carID
      const make = prompt("Enter new car make:")
      const model = prompt("Enter new car model:")
      const year = prompt("Enter new car year:")
      const trim = prompt("Enter new car trim:")
      const gas_Mileage = prompt("Enter new Gas Mileage:")
      const tank_Size = prompt("Enter new Tank Size:")
      const fuel_Type = prompt("Enter new Fuel Type:")
      const horsePower = prompt("Enter new Horsepower:")
      const torque = prompt("Enter new Torque:")
      const transmission = prompt("Enter new Transmission:")
      try{
        await fetch(url + "Car", {
          // Adding method type
          method: "PUT",
          
          // Adding body or contents to send
          body: JSON.stringify({
              
              carID: carIDupdated,
              make : make,
              model: model,
              year: year,
              trim: trim,
              gas_Mileage: gas_Mileage,
              tank_Size: tank_Size,
              fuel_type: fuel_Type,
              horsePower: horsePower,
              torque: torque,
              transmission: transmission
          }),
      
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      console.log("Success!")
      }catch{
      console.log("Fail!")
    }
  })
}