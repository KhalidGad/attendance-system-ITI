const body = document.querySelector("body"),
       modeToggle = body.querySelector(".mode-toggle");
        sidebar = body.querySelector("nav");
       sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

Dailyreport = document.getElementById("DaliyRep");
Monthreport = document.getElementById("MonthRep");
AttendanceOPtion = document.getElementById("AttendanceOption");
Attendlist = document.getElementById("AttendList");

const displayTableDef = window.getComputedStyle(Dailyreport).display;

userName = "SuperEmp" ;
if (userName != "SuperEmp" )
{
    AttendanceOPtion.style.display="none" ;
}

function selectTable(option)
{
    Dailyreport.style.display= "none";
    Attendlist.style.display= "none";
    Monthreport.style.display= "none";
    switch (option.id)
    {
        case "DaliyrepBottun":  Dailyreport.style.display= displayTableDef ; break;
        case "MonthrepBottun":  Monthreport.style.display= displayTableDef ;break;
        case "AttendanceBottun": Attendlist.style.display= displayTableDef; break ;
    }
}


address=JSON.parse(document.cookie.split("=")[1]).address
document.getElementById("address").innerText="Address : "+address;

fname=JSON.parse(document.cookie.split("=")[1]).fname
document.getElementById("fname").innerText="First Name : "+fname;

lname=JSON.parse(document.cookie.split("=")[1]).lname
document.getElementById("lname").innerText="Last Name :  "+lname;

age=JSON.parse(document.cookie.split("=")[1]).age
document.getElementById("age").innerText="Age :  "+age;

// email=JSON.parse(document.cookie.split("=")[1]).email
// document.getElementById("email").innerText="Email :  "+email;