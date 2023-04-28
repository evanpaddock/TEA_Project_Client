function PopulateLoginPages(){
    const userAbilities = JSON.parse(localStorage.getItem("TEASiteUserAbilities"));
    const user = JSON.parse(localStorage.getItem("TEASiteUser"));

    let loginArea = document.getElementById("loginLinkArea")

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
        if(userAbilities.edit_Page_TF){
            document.getElementById("genInfoButton").innerHTML = `
            <!-- Button trigger edit text modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editText" id="editTextButton">
                Edit Text
            </button>
            `;
            
            document.body.insertAdjacentHTML("beforeend",`
            <!-- Add Song Modal -->
            <div class="modal fade bg-black bg-opacity-50" id="editText" tabindex="-1" role="dialog" aria-labelledby="editTextLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editTextLabel">Edit Page Text</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="editPageForm">
                                <div class="form-group">
                                <label for="pageTitle" required>Header</label>
                                <input type="text" class="form-control" id="pageTitle" placeholder="This is the header or title." required maxlength="100">
                                </div>
                                <br>
                                <div class="form-group">
                                <label for="pageText">Text</label>
                                <input type="text" class="form-control" id="pageText" placeholder="This is the main body text." required>
                                </div>
                                <br>
                                <button type="submit" class="btn btn-primary" onclick="saveEditedGenInfo(event)">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                        </div>
                    </div>
                </div>
            </div>
            `);
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