const url = 'https://localhost:7106/api/';

loadInGenInfo();

function loadInGenInfo(){
    fetch(url + "GenInfo").then(function(response){
        return response.json();
    }).then(async function(data){
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("text").innerHTML = data.text;
    })
}
async function saveEditedGenInfo(e){
    e.preventDefault();

    let title = document.getElementById("pageTitle").value;

    console.log(title);

    let text = document.getElementById("pageText").value;
    console.log(text);

    let newPageInfo = {
        title: title,
        text: text
    }


    await fetch(`${url}GenInfo`, {
         // Adding method type
         method: "PUT",
         // Adding body or contents to send
         body: JSON.stringify(newPageInfo),
         // Adding headers to the request
         headers: {
          "Content-type": "application/json; charset=UTF-8"
         }
    })
}