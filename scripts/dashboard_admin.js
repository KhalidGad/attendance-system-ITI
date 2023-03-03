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

build_all_emp_table();
build_Tabels();

alltable=document.getElementById("allemp");
fulltable=document.getElementById("full");
exectable=document.getElementById("exec");
latetable=document.getElementById("late");
requeststable=document.getElementById("requests");

fulltable.style.display= "none";
exectable.style.display= "none";
latetable.style.display= "none";
requeststable.style.display= "none";



const displayTableDef = window.getComputedStyle(alltable).display;

function selectTable(option)
{
    alltable.style.display= "none";
    fulltable.style.display= "none";
    exectable.style.display= "none";
    latetable.style.display= "none";
    requeststable.style.display= "none";

    switch (option.id)
    {
        case "allBottun":  alltable.style.display= displayTableDef ; break;
        case "fullBottun": fulltable.style.display= displayTableDef ;break;
        case "execBottun": exectable.style.display= displayTableDef; break ;
        case "lateBottun": latetable.style.display= displayTableDef; break ;
        case "requestsBottun": requeststable.style.display= displayTableDef; break ;

    }
}


function build_all_emp_table()
{
    let users  = localStorage.getItem('users');
    users = JSON.parse(users);
    tableBody = document.getElementById('tb-allemp');

    users.forEach(element => {
        if (element['username']=="admin")
            return ;
        newRow = document.createElement('tr')
        newRow.innerHTML=`<td>${element['fname'] + " " +element['lname'] }</td> <td id >${element['email']}</td> <td>${element['address']}</td>  <td>${element['age']}</td>`
        tableBody.appendChild(newRow);
    });
}


function build_Tabels()
{
    let users  = localStorage.getItem('users');
    users = JSON.parse(users);

    tb_full = document.getElementById('tb-full-info');
    tb_absnt = document.getElementById("tb-absnt");
    tb_late = document.getElementById("tb-late");

    dd=1
    mm=1
    yyyy=2023

    users.forEach(element => {
        if (element['username']=="admin") 
            return ;
        fullRow = document.createElement('tr')
        absntRow = document.createElement('tr')
        lateRow = document.createElement('tr')

        totalAttend = 0 ,totalAbs = 0 , totalLate=0 ;
         years= element['attendance']["years"]
    
     Object.entries(years).forEach(entry => {
        const [yyyy, value] = entry;
        Object.entries(value["months"]).forEach(entry => {
            const [mm, value] = entry;
                totalAttend+=value["atted"]
                totalAbs+=value["absent"];
                totalLate+=value["late"];
          });
    });
        namecell=`<td>${element['fname'] + " " +element['lname'] }</td>`
        absntcell=`<td>${totalAbs}</td>`
        attndcell=`<td>${totalAttend}</td>`
        latecell=`<td>${totalLate}</td>`

      
        fullRow.innerHTML= namecell+attndcell+absntcell+latecell;
        absntRow.innerHTML=namecell+absntcell;
        lateRow.innerHTML=namecell+latecell;

        tb_full.appendChild(fullRow);
        tb_absnt.appendChild(absntRow);
        tb_late.appendChild(lateRow);

        console.log( tb_full.innerHTML)

    });
}




