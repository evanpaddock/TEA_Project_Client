function PopulateLoginPages(){
    const userAbilities = JSON.parse(localStorage.getItem("TEASiteUserAbilities"));
    const user = JSON.parse(localStorage.getItem("TEASiteUser"));

    console.log(userAbilities)

    let loginArea = document.getElementById("loginLinkArea")
    console.log(loginArea)

    try{
        let userRole = user.role_ID;
        loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link" onClick="LogOut()">Log-Out</a>
                                                    </li>`);

        loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link active">Welcome ${user.userName}</a>
                                                    </li>`);

        if(userAbilities.admin_Page_TF){
            loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link" href="./adminreports.html">Admin Reports</a>
                                                    </li>`);

            loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link" href="./admincalc.html">Admin Calculator</a>
                                                    </li>`);
        }

        if(userAbilities.reports_Able_TF){
            loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link" href="./userCalc.html">Car Calculator</a>
                                                    </li>`)
        }
        
    }catch{
        loginArea.insertAdjacentHTML("afterbegin", `<li class="nav-item">
                                                    <a class="nav-link" href="./login.html">Login/Register</a>
                                                    </li>`)
    }
}

function LogOut(){
    localStorage.clear();
    location.replace("./index.html")
}