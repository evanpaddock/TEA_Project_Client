const url = `https://localhost:7106/api/`
const data = []


function handleOnLoad(){
    CreateFirstReport()
    CreateSecondReport()
    CreateThirdReport()
}

function CreateFirstReport(){
  const getData = function() {
    fetch(`${url}AdminReport/MakeAndTotal`)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        // Format the data for use with Chart.js
        const labels = [];
        const values = [];
        data.forEach(function(car) {
            labels.push(car.make);
            values.push(car.count);
        });
  
    const ctx = document.getElementById('firstChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Most Popular Car by Search',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        autoPadding: true,
        layout: {
          padding: 20
      }
        // scales: {
        //   // y: {
        //   //   beginAtZero: true
        //   // }
        // }
      }
    });
    data.push(myChart)
    // Fetching data from mySQL, will update when time to connect to API
  })
}
getData()

}

function CreateSecondReport(){
  const getData = function() {
    fetch(`${url}AdminReport/CarCombinations`)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        // Format the data for use with Chart.js
        const labels = [];
        const values = [];
        data.forEach(function(CarCombinations) {
            labels.push(CarCombinations.bothCarMakes);
            values.push(CarCombinations.totalSame);
        });
  
    const ctx = document.getElementById('secondChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Most Popular Make Comparisons',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        autoPadding: true,
        layout: {
          padding: 20
      }
        // scales: {
        //   // y: {
        //   //   beginAtZero: true
        //   // }
        // }
      }
    });
    data.push(myChart)
    // Fetching data from mySQL, will update when time to connect to API
  })
}
getData()

}


function CreateThirdReport(){
  const getData = function() {
    fetch(`${url}AdminReport/UserStateTotals`)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        // Format the data for use with Chart.js
        const labels = [];
        const values = [];
        data.forEach(function(user) {
            labels.push(user.state);
            values.push(user.count);
        });
  
    const ctx = document.getElementById('stateChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Users per State',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        autoPadding: true,
        layout: {
          padding: 20
      }
      }
    });
    data.push(myChart)
  })
}
getData()
}