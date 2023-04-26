const url = `https://localhost:7106/api/`
const data = []


function handleOnLoad(){
    CreateFirstReport()
    CreateSecondReport()
    
}

function CreateFirstReport(){
  const getData = function() {
    fetch(url + "Car")
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
      //formatting data for use with chart.js
      const labels = []
      const values = []
      data.forEach(function(item){
        labels.push(item.label)
        values.push(item.value)
      })
    })
  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
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
    // Fetching data from mySQL, will update when time to connect to API
    fetch('insert link here')
    .then(response => response.json())
    .then(data =>{
        //Updates the chart
        myChart.data.labels = data.map(sale => sale.date)
        myChart.data.datasets[0] = data.map(sale.amount)
        myChart.update()
    })
    .catch(error => {
        console.error('Error fetching sales data', error)
    })
}
}

function CreateSecondReport(){
  const ctx = document.getElementById('secondChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Sales',
        data: [],
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
      //   // // y: {
      //   //   beginAtZero: true
      //   // }
      // }
    }
  });
  // Fetching data from mySQL
  fetch('insert link here')
  .then(response => response.json())
  .then(data =>{
      //Updates the chart
      myChart.data.labels = data.map(sale => sale.date)
      myChart.data.datasets[0] = data.map(sale.amount)
      myChart.update()
  })
  .catch(error => {
      console.error('Error fetching sales data', error)
  })
}