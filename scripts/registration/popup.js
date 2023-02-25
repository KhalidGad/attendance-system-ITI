const signupBtn = document.getElementById("signup-btn");
const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementsByClassName("popup")[0];
// const container = document.getElementsByClassName("container")[0];


signupBtn.addEventListener("click", openPopup);
popupBtn.addEventListener("click", closePopup);

console.log("hello")
function openPopup(e){
    popup.classList.add("open-popup");
    container.classList.add("hide-form")
}

function closePopup(e){
    popup.classList.remove("open-popup");
    container.classList.remove("active")
    container.classList.remove("hide-form")
}