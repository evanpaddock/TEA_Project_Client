const url = `https://localhost:7106/api/`

function handleOnLoad(){
    getData()
    //createTable()
}

const getData = function() {
    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        createTable(data)
    })
}
getData()

const data = []

const tableHtml = createTable(data);
document.getElementById("table-container").innerHTML = tableHtml;


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
            <th scope="col">ID</th>
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
        <td>${car.id}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>${car.trim}</td>
        <td>${car.Gas_Mileage}</td>
        <td>${car.Tank_Size}</td>
        <td>${car.Fuel_Type}</td>
        <td>${car.HorsePower}</td>
        <td>${car.Torque}</td>
        <td>${car.Transmission}</td>
      </tr>
    `;
      }    
    });

    tableHtml += `
            </tbody>
        </table>
        `;
    return tableHtml;
  }