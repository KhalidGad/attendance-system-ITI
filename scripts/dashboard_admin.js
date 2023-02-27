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


