const url = `https://localhost:7106/api/`

loadInGenInfo();

function loadInGenInfo(){
    fetch(url + "GenInfo").then(function(response){
        return response.json();
    }).then(async function(data){
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("text").innerHTML = data.text;
    })
}