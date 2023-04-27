const url = `https://localhost:7106/api/`
const data = []


function handleOnLoad(){
    CreateFirstReport()
    // CreateSecondReport()
    
}

function CreateFirstReport(){
  const getData = function() {
    fetch(`${url}AdminReport`)
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
  
    const ctx = document.getElementById('myChart').getContext('2d');
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

// function CreateSecondReport(){
//   const ctx = document.getElementById('secondChart').getContext('2d');
//   const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: [],
//       datasets: [{
//         label: 'Sales',
//         data: [],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       autoPadding: true,
//       layout: {
//         padding: 20
//     }
//       // scales: {
//       //   // // y: {
//       //   //   beginAtZero: true
//       //   // }
//       // }
//     }
//   });
//   // Fetching data from mySQL
//   fetch(`${url}`)
//   .then(response => response.json())
//   .then(data =>{
//       //Updates the chart
//       myChart.data.labels = data.map(car => car.make)
//       myChart.data.datasets[0] = data.map(car.count)
//       myChart.update()
//   })
//   .catch(error => {
//       console.error('Error fetching sales data', error)
//   })
// }