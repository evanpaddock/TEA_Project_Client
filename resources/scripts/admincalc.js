
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
    {id: 0, make: "Ford", model: "Mustang", year: 2019, deleted: false},
    {id: 1, make: "Tesla", model: "Model S", year: 2020, deleted: false },
    {id: 2, make: "Chevrolet", model: "Corvette", year: 2021, deleted: false },// New vehicle added
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
    data.forEach((item, id) => {
        if(data[id].deleted != true){
        tableHtml += `<tr class="table-dark">
        <td>${id + 1}</td>
        <td>${item.make}</td>
        <td>${item.model}</td>
        <td>${item.year}</td>
        <td>
            <button id="edit-car-btn" class="btn btn-secondary" data-index="${id}">Edit</button>
          </td>
        <td>
            <button id="delete-car-btn" class="btn btn-danger" data-index="${id}">Delete</button>
        </td>
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