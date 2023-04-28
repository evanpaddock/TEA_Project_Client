const url = `https://localhost:7106/api/`
const data = []


function handleOnLoad(){
    CreateFirstReport()
    CreateSecondReport()
    CreateThirdReport()
    CreateFourthReport()
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
          backgroundColor: 'rgba(50, 93, 136, 0.55)',
          borderColor: 'rgba(50, 93, 136, 0.55)',
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
    fetch(`${url}AdminReport/FuelTypeAndTotal`)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        // Format the data for use with Chart.js
        const labels = [];
        const values = [];
        data.forEach(function(CarCombinations) {
            labels.push(CarCombinations.fuelType);
            values.push(CarCombinations.totalSame);
        });
  
    const ctx = document.getElementById('secondChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Fuel Types for Viewable Cars',
          data: values,
          backgroundColor: 'rgba(50, 93, 136, 0.55)',
          borderColor: 'rgba(50, 93, 136, 0.55)',
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
            values.push(user.totalCount);
        });
  
    const ctx = document.getElementById('stateChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Users per State',
          data: values,
          backgroundColor: 'rgba(50, 93, 136, 0.55)',
          borderColor: 'rgba(50, 93, 136, 0.55)',
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

function CreateFourthReport(){
  const getData = function() {
    fetch(`${url}AdminReport/DateJoinedTotals`)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        // Format the data for use with Chart.js
        const labels = [];
        const values = [];
        data.forEach(function(user) {
            labels.push(user.dateJoined);
            values.push(user.total);
        });
  
    const ctx = document.getElementById('dateJoinedChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Users joined per day',
          data: values,
          backgroundColor: 'rgba(50, 93, 136, 0.55)',
          borderColor: 'rgba(50, 93, 136, 0.55)',
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



//Chart Export Functions

function ExportChart1(){
  const chartCanvas = document.getElementById('firstChart');

  html2canvas(chartCanvas).then(canvas => {
    const downloadLink = document.createElement('a')
    downloadLink.href = canvas.toDataURL('image/png');
    // chartImage now contains the chart as a PNG image
    downloadLink.download = 'secondChart.png'
    downloadLink.click()
});
}

function ExportChart2(){
  const chartCanvas = document.getElementById('secondChart');

  html2canvas(chartCanvas).then(canvas => {
    const downloadLink = document.createElement('a')
    downloadLink.href = canvas.toDataURL('image/png');
    // chartImage now contains the chart as a PNG image
    downloadLink.download = 'secondChart.png'
    downloadLink.click()
});
}

function ExportChart3(){
  const chartCanvas = document.getElementById('stateChart');

  html2canvas(chartCanvas).then(canvas => {
    const downloadLink = document.createElement('a')
    downloadLink.href = canvas.toDataURL('image/png');
    // chartImage now contains the chart as a PNG image
    downloadLink.download = 'stateChart.png'
    downloadLink.click()
});
}

function ExportChart4(){
  const chartCanvas = document.getElementById('dateJoinedChart');

  html2canvas(chartCanvas).then(canvas => {
    const downloadLink = document.createElement('a')
    downloadLink.href = canvas.toDataURL('image/png');
    // chartImage now contains the chart as a PNG image
    downloadLink.download = 'dateJoinedChart.png'
    downloadLink.click()
});
}