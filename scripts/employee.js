body = document.querySelector("body"),
       modeToggle = body.querySelector(".mode-toggle");
        sidebar = body.querySelector("nav");
       sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// get current user
user  = document.cookie.split("user=")[1].split(';')[0]
user = JSON.parse(user);

//get current date 
now = new Date();
yyyy = now.getFullYear();
mm = now.getMonth();
dd = now.getDate();


build_daily_report();
build_month_report();
Dailyreport = document.getElementById("DaliyRep");
Monthreport = document.getElementById("MonthRep");
AttendanceOPtion = document.getElementById("AttendanceOption");
Attendlist = document.getElementById("AttendList");

const displayTableDef = window.getComputedStyle(Dailyreport).display;

// userName = "SuperEmp" ;
// if (userName != "SuperEmp" )
// {
//     AttendanceOPtion.style.display="none" ;
// }

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

function build_daily_report ()
{
   //user = JSON.parse(document.cookie.split("=")[1]);


   //tb-daily
   tb_full = document.getElementById('tb-daily');
   years= user['attendance']["years"]
   
   Object.entries(years).forEach(entry => {
    const [yyyy, value] = entry;
    Object.entries(value["months"]).forEach(entry => {
        const [mm, value] = entry;
        Object.entries(value["days"]).forEach( entry => {
            const [dd, value] = entry;
            newRow = document.createElement('tr')
            newRow.innerHTML=`<td>${yyyy+"-"+mm+"-"+dd}</td>`
            newRow.innerHTML+=`<td>${value["start"]}</td>`
            newRow.innerHTML+=`<td>${value["end"]}</td>`
            tb_full.appendChild(newRow);
          });
      });
  });


}

function build_month_report ()
{
    tb_mon = document.getElementById('tb-month');
    mounths= user['attendance']["years"][yyyy]["months"]
    
     Object.entries(mounths).forEach(entry => {
         const [mm, value] = entry;
             console.log(value);
             newRow = document.createElement('tr')
             newRow.innerHTML=`<td>${yyyy+"-"+mm}</td>`
             newRow.innerHTML+=`<td>${value["atted"]}</td>`
             newRow.innerHTML+=`<td>${value["absent"]}</td>`
             newRow.innerHTML+=`<td>${value["late"]}</td>`
             tb_mon.appendChild(newRow);
       });
}

address=JSON.parse(document.cookie.split("user=")[1].split(';')[0]).address
document.getElementById("address").innerText="Address : "+address;

fname=JSON.parse(document.cookie.split("user=")[1].split(';')[0]).fname
document.getElementById("fname").innerText="First Name : "+fname;

lname=JSON.parse(document.cookie.split("user=")[1].split(';')[0]).lname
document.getElementById("lname").innerText="Last Name :  "+lname;

age=JSON.parse(document.cookie.split("user=")[1].split(';')[0]).age
document.getElementById("age").innerText="Age :  "+age;

// email=JSON.parse(document.cookie.split("=")[1]).email
// document.getElementById("email").innerText="Email :  "+email;