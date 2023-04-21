// Get a reference to the form and table
const form = document.getElementById('add-car-form');
const table = document.querySelector('.car-table tbody');

// Listen for the form submission event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const make = form.elements.make.value;
  const model = form.elements.model.value;
  const year = form.elements.year.value;

  // Create a new table row element
  const newRow = document.createElement('tr');

  // Add the cells to the new row
  const carCell = document.createElement('td');
  carCell.textContent = `${make} ${model}`;
  newRow.appendChild(carCell);

  const makeCell = document.createElement('td');
  makeCell.textContent = make;
  newRow.appendChild(makeCell);

  const modelCell = document.createElement('td');
  modelCell.textContent = model;
  newRow.appendChild(modelCell);

  const yearCell = document.createElement('td');
  yearCell.textContent = year;
  newRow.appendChild(yearCell);

  // Append the new row to the table body
  table.appendChild(newRow);

  // Reset the form
  form.reset();
});

