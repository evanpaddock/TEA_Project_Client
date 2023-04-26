// Javascript functions for the login page
handleLogin();
handleRegister();

const url = `https://localhost:7106/api/`;

function handleLogin(){
    let form = document.getElementById("loginform");
    form.addEventListener('submit', async function(e){
        e.preventDefault();

        const username = document.getElementById("loginUserName").value
        const password = document.getElementById("loginPassword").value


        const loginInfo = {username, password}

        fetch(url + "User").then(function(response){
            return response.json();
        }).then(async function(data){
            const foundUser = data.find(
                (data) => data.userName === loginInfo.username &&
                data.password === loginInfo.password
            )

            try{
                let foundUserName = foundUser.userName;

                alert(`Welcome ${foundUserName}!`)
            }catch{
                alert("A user with that name and password are not found.\n\nPlease try again or register.")
                document.getElementById("loginUsername").value = "";
                document.getElementById("loginPassword").value = "";
            }
        })
    })
    
}

function handleRegister(){
    let form = document.getElementById("registerform");

    form.addEventListener('submit', async function(e){
        e.preventDefault();
    
        const username = document.getElementById("registerUsername").value
        const firstName = document.getElementById("registerFirstName").value
        const lastName = document.getElementById("registerLastName").value
        const userEmail = document.getElementById("registerEmail").value
        const userState = document.getElementById("registerState").value
        const password = document.getElementById("registerPassword").value;
        const confirmpassword = document.getElementById("confirmPassword").value

        if(password != confirmpassword){
            alert("Passwords do not match\n\n Please try again")

            document.getElementById("registerPassword").value = "";
            document.getElementById("confirmpassword").value = "";
        }else{
            try{
                const joinDate = new Date().toLocaleDateString();
                await fetch(url + "User", {
                    // Adding method type
                    method: "POST",
                    
                    // Adding body or contents to send
                    body: JSON.stringify({
                        userName: username,
                        password: password,
                        userEmail: userEmail,
                        firstName: firstName,
                        lastName: lastName,
                        dateJoined: joinDate,
                        state: userState,
                        role_ID: 2
                    }),
                
                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                console.log("Success!")
            }catch{
                console.log("Fail!")
            }
        }
    })
}