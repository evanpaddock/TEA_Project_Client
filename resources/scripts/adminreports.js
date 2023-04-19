function handleOnLoad(){
    createReport()
}

function createReport(){
    const ctx = document.getElementById('myChart').getContext('2d');
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
        scales: {
          y: {
            beginAtZero: true
          }
        }
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