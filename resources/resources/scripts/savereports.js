async function SaveReport(e){
    const user = JSON.parse(localStorage.getItem("TEASiteUser"));

    const userID = user.user_ID;

    e.preventDefault();
    let reportName = prompt("What would you like to name this report?");

    reportName += userID;

    const deleted = false;


    let carID = document.getElementById("saveReport").parentNode.id;

    await fetch(url + "Report", {
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            reportName: reportName
        }),
    
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    await fetch(url + "Report", {
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify({
            reportName: reportName, deleted: false
        }),
    
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    await fetch(url + "Report").then(function(response){
        return response.json();
    }).then(async function(data){
        const foundReport = data.find(
            (data) => reportName = data.reportName
        )

        const reportID = foundReport.report_ID

        await fetch(url + "ReportCars", {
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({
                report_ID: reportID,
                carID: carID
            }),
        
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        await fetch(url + "UserReports", {
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({
                user_ID: userID,
                report_ID: reportID
            }),
        
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        console.log("Sucess")
    })


}