const url = `https://localhost:7106/api/`
const data = []



function handleOnLoad(){
    getData()
    addCar()
    createRoleTable();

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




function addCar(){
const addCarBtn = document.getElementById("add-car-btn");
addCarBtn.addEventListener("click", async function(e) {
  e.preventDefault()
      
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
        await fetch(`${url}Car`, {
          // Adding method type
          method: "POST",
          
          // Adding body or contents to send
          body: JSON.stringify({
              
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
  
});
}

function createTable(data){
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
    data.forEach((car) => {
      console.log(car)
        if(car.deleted != true){
          console.log("inside if")
        tableHtml += `<tr class="table-secondary">
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
        <div><td><button onClick="handleEdit(${car.carID})" type="submit" class="btn btn-primary">Edit</button></td></div>
        <div><td><button onClick="handleDelete(${car.carID})" type="submit" class="btn btn-danger">Delete</button></td></div>

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

  
  async function handleEdit(carID){
    console.log("inside edit")
      
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
        await fetch(`${url}Car`, {
          // Adding method type
          method: "PUT",
          
          // Adding body or contents to send
          body: JSON.stringify({
              
              carID: carID,
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
  }

  async function handleDelete(carID){
    console.log("inside delete")
    fetch(`${url}Car`)
    .then(response => response.json())
    .then(cars =>{

const car = cars.find(car => car.carID === carID)
updateDelete(car)    

})
  }

  async function updateDelete(car){
    console.log(car)
    const carID = car.carID
    const make = car.make
    const model = car.model
    const year = car.year
    const trim = car.trim
    const gas_Mileage = car.gas_Mileage
    const tank_Size = car.tank_Size
    const fuel_Type = car.fuel_Type
    const horsePower = car.horsePower
    const torque = car.torque
    const transmission = car.transmission
    const timesViewed = car.timesViewed
      const deleted = true
      try{
        alert("This car is now deleted")
        await fetch(`${url}Car`, {
          // Adding method type
          method: "PUT",
          
          // Adding body or contents to send
          body: JSON.stringify({
              
            carID: carID,
            make : make,
            model: model,
            year: year,
            trim: trim,
            gas_Mileage: gas_Mileage,
            tank_Size: tank_Size,
            fuel_type: fuel_Type,
            horsePower: horsePower,
            torque: torque,
            transmission: transmission, 
            timesViewed : timesViewed,
            deleted: deleted
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
  }

async function createRoleTable(){
  let tableHtml = `
        <table class="table table-hover carTable">
        <thead>
            <tr>
            <th scope="col">Role Name</th>
            <th scope="col">Edit_Page_TF</th>
            <th scope="col">Reports_Able_TF</th>
            <th scope="col">Admin_Page_TF</th>
            <th scope="col">User_Page_TF</th>
            </tr>
        </thead>
        <tbody>
    `;
  await fetch(url + "Role")
    .then(function (response){
        return response.json()
    }).then(function(data){
      data.forEach((role) => {
          tableHtml += `<tr class="table-secondary">
          <td>${role.roleName}</td>
          <td>${role.edit_Page_TF}</td>
          <td>${role.reports_Able_TF}</td>
          <td>${role.admin_Page_TF}</td>
          <td>${role.user_Page_TF}</td>
        </tr>
      `; 
      });
      
      tableHtml += `
              </tbody>
          </table>
          `;
      document.getElementById("role-container").innerHTML = tableHtml;
    })

    
    
  }