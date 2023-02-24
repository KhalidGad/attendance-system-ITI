const eyeicon = document.getElementsByClassName("showhide")[0];
const passField = document.getElementById("pass-input");

// show/hide password and change eye icon
eyeicon.addEventListener('click', (e)=>{
    if(passField.type === "password"){
        passField.type = "text";
        eyeicon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        passField.type = "password";
        eyeicon.classList.replace("uil-eye", "uil-eye-slash");
    }
})


const container = document.getElementsByClassName("container")[0];
const signup = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

// show/hide login/signup form
signup.addEventListener('click', (e)=>{
    container.classList.add("active");
})
login.addEventListener('click', (e)=>{
    container.classList.remove("active");
})
