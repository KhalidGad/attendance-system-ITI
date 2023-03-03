const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginSubmit = document.getElementById("login-btn");
const signupSubmit = document.getElementById("signup-btn");

const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementsByClassName("popup")[0];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get username and password the the user entered
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("pass-input").value;

    // get a list of all users in the system
    let users = localStorage.getItem('users');
    users = JSON.parse(users);

    // exist flag
    let exist = false;
    document.cookie = "test=" + JSON.stringify({name:"gehad"});
    // check if user is exist in the system
    users.forEach(user => {
        if(user.username === username && user.password == password){
            exist = true;

            // set cookie with user object
            
            document.cookie = "user=" + JSON.stringify(user);
         

            // map to the right page of the user
            //cangepath
            if(username == 'admin'){
                window.location = "dashboard_admin.html"
            }
            //cangepath
            else if(user.super){
                window.location = "employee.html?super=true"
            }
            //cangepath
            else{
                window.location = "employee.html?super=false"
            }
        }
    });
    if(!exist){
        document.getElementById('password-error').style.display='flex'
    }
})

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = document.getElementById("fname-input");
    let lname = document.getElementById("lname-input");
    let address = document.getElementById("address-input");
    let email = document.getElementById("email-input");
    let age = document.getElementById("age-input");

    // make object for user data
    let user = {
        'fname': fname.value,
        'lanme': lname.value,
        'address': address.value,
        'email': email.value,
        'age': age.value,
    }

    // save data into local storage
    let requests = localStorage.getItem('requests');
    requests = JSON.parse(requests);
    requests.push(user);
    requestsJSON = JSON.stringify(requests);
    localStorage.setItem('requests', requestsJSON);

    console.log(user);
    openPopup();
})

popupBtn.addEventListener("click", closePopup);

function openPopup(e) {
    popup.classList.add("open-popup");
    container.classList.add("hide-form")
}

function closePopup(e) {
    popup.classList.remove("open-popup");
    container.classList.remove("active")
    container.classList.remove("hide-form")
}