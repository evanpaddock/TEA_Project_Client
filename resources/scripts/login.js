// Javascript functions for the login page
function handleLogin(event){
    event.preventDefault(); //prevent form submission

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const loginInfo = {username, password}
    console.log(loginInfo)
    //send login info as needed
}

function handleRegister(event){
    event.preventDefault() //prevent form submission

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const confirmpassword = document.getElementById("confirmpassword").value

    if(password != confirmpassword){
        alert("Passwords do not match")
    }

    const registrationInfo = {username, password}
    console.log(registrationInfo)
}