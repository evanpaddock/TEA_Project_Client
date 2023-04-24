
function handleOnLoad(){
    createTable(data)
}

// const getData = function() {
//     fetch(url)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (data) {
//         createTable(data)
//     })
// }
// getData()

const data = [
    { make: "Ford", model: "Mustang", year: 2019, deleted: false},
    { make: "Tesla", model: "Model S", year: 2020, deleted: false },
    { make: "Chevrolet", model: "Corvette", year: 2021, deleted: false },// New vehicle added
  ];
const tableHtml = createTable(data);
document.getElementById("table-container").innerHTML = tableHtml;


const addCarBtn = document.getElementById("add-car-btn");


addCarBtn.addEventListener("click", () => {
  const make = prompt("Enter car make:");
  const model = prompt("Enter car model:");
  const year = parseInt(prompt("Enter car year:"));
  data.push({ make, model, year });
  const tableHtml = createTable(data);
  document.getElementById("table-container").innerHTML = tableHtml;
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
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
    `;
    data.forEach((item, index) => {
        tableHtml += `<tr class="table-dark">
        <td>${index + 1}</td>
        <td>${item.make}</td>
        <td>${item.model}</td>
        <td>${item.year}</td>
        <td>
            <button class="btn btn-secondary edit-car-btn" data-index="${index}">Edit</button>
          </td>
        <td>
            <button class="btn btn-danger delete-car-btn" data-index="${index}">Delete</button>
        </td>
      </tr>
    `;
    });
    tableHtml += `
            </tbody>
        </table>
        `;
  
    const tableElement = document.createElement("div");
    tableElement.innerHTML = tableHtml;
  
    tableElement.querySelectorAll(".edit-car-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-index"));
        const make = prompt("Enter updated car make:", data[index].make);
        const model = prompt("Enter updated car model:", data[index].model);
        const year = parseInt(prompt("Enter updated car year:", data[index].year));
        data[index].make = make;
        data[index].model = model;
        data[index].year = year;
        const tableHtml = createTable(data);
        document.getElementById("table-container").innerHTML = tableHtml;
      });
    });
  
    tableElement.querySelectorAll(".delete-car-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-index"));
        data[index].deleted = true;
        const tableHtml = createTable(data);
        document.getElementById("table-container").innerHTML = tableHtml;
        console.log(data[index].deleted)
      });
    });
  
    return tableElement.innerHTML;
  }


document.querySelectorAll(".edit-car-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index"));
      const make = prompt("Enter updated car make:", data[index].make);
      const model = prompt("Enter updated car model:", data[index].model);
      const year = parseInt(prompt("Enter updated car year:", data[index].year));
      data[index].make = make;
      data[index].model = model;
      data[index].year = year;
      const tableHtml = createTable(data);
      document.getElementById("table-container").innerHTML = tableHtml;
    });
  });

  document.querySelectorAll(".delete-car-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index"));
      data[index].deleted = true;
      const tableHtml = createTable(data);
      document.getElementById("table-container").innerHTML = tableHtml;
    });
  });