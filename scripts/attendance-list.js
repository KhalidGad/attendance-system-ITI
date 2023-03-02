var tbodyRef = document.getElementById('AttendList').tBodies[0]

// get a list of all users in the system
let users = localStorage.getItem('users');
users = JSON.parse(users);

// loop for every user
users.forEach((user) => {
    if(user.username === 'admin')
        return;
    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();

    // Insert new td
    let nameTd = newRow.insertCell();

    // Append a text to the td
    nameTd.innerHTML = user.fname + " " + user.lname

    stateTd = newRow.insertCell();
    stateTd.innerHTML = 'empty'
    
    stateTd = newRow.insertCell();
    stateTd.innerHTML = 'empty'

    button = newRow.insertCell();
    button.innerHTML = '<input type="button" class="btn btn-primary attend-leave-btn" value="Attend" onclick="">'
    // save date when attend/leave button is presses
    button.firstChild.addEventListener('click', (e)=>{
        let now = new Date();
        let yearnow = now.getFullYear();
        let monthnow = now.getMonth();
        let daynow = now.getDate();
        if(e.target.value === 'Attend'){
            user.attendance.years[yearnow].months[monthnow].days[daynow].start
            user.attendance.years[2023].months[0].days[2].end
        }
        else{

        }
        console.log(e.target.parentElement.parentElement)
    })

})

// save date when attend button is presses
// let attendBtns = document.getElementsByClassName('attend-leave-btn')
// for(let btn of attendBtns){
//     btn.addEventListener('click', (e)=>{
//         if(e.target.value === 'Attend'){
            
//         }
//         else{

//         }
//         console.log(e.target.parentElement.parentElement)
//     })
// }
