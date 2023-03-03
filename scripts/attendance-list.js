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
    
    let stateTd = newRow.insertCell();
    stateTd.innerHTML = 'null'

    let buttonTd = newRow.insertCell();
    buttonTd.innerHTML = '<input type="button" class="btn btn-primary attend-leave-btn" value="Attend" onclick="">'
    // save date when attend/leave button is presses
    buttonTd.firstChild.addEventListener('click', (e)=>{
        let now = new Date();
        let yearnow = now.getFullYear();
        let monthnow = now.getMonth();
        let daynow = now.getDate();
        let dayName = now.toLocaleString('en-US', { weekday: 'long' })
        let hournow = now.getHours();
        let minutesnow = now.getMinutes();
        let timenow = now.getHours() + ':' + now.getMinutes();
        if(e.target.value === 'Attend'){
            if(user.attendance.years[yearnow] === undefined)
                user.attendance.years[yearnow] = {months:{}};
            
            if(user.attendance.years[yearnow].months[monthnow] === undefined)
                user.attendance.years[yearnow].months[monthnow] = {atted : 0,late : 0, absent : 0, days: {}};

            if (user.attendance.years[yearnow].months[monthnow].days[daynow] === undefined)
                user.attendance.years[yearnow].months[monthnow].days[daynow] = {start:'', end:''}
                
            user.attendance.years[yearnow].months[monthnow].days[daynow].start = timenow;
            stateTd.innerHTML = "attended at hour: " + timenow + " on " + dayName;
            
            // set attend and late value
            user.attendance.years[yearnow].months[monthnow].atted += 1
            if(hournow > 8 || (hournow === 8 && minutesnow > 30))
                user.attendance.years[yearnow].months[monthnow].late += 1
            e.target.value = 'Leave';
        }
        else{
            user.attendance.years[yearnow].months[monthnow].days[daynow].end = timenow
            stateTd.innerHTML = "left at " + timenow + " on " + dayName;
            e.target.value = 'Attend';
        }
        usersJSON = JSON.stringify(users);
        localStorage.setItem('users', usersJSON);

    })


    // auto leaving after 8 hour works [at 3:30pm] or mark absent if not comes today 
    runCodeAtTime(15, 30, 0, function() {
        let now = new Date();
        let yearnow = now.getFullYear();
        let monthnow = now.getMonth();
        let daynow = now.getDate();
        let dayName = now.toLocaleString('en-US', { weekday: 'long' })
        let timenow = now.getHours() + ':' + now.getMinutes();

        // if user did not enter system today
        if(user.attendance.years[yearnow].months[monthnow].days[daynow] === undefined)
            user.attendance.years[yearnow].months[monthnow].absent += 1;
        else if(user.attendance.years[yearnow].months[monthnow].days[daynow].end === '')
        {
            user.attendance.years[yearnow].months[monthnow].days[daynow].end = timenow
            stateTd.innerHTML = "left at " + timenow + " on " + dayName;
            e.target.value = 'Attend';
        }
    });
})

function runCodeAtTime(hour, minute, second, callback) {
  setInterval(function() {
    const now = new Date(); // get the current time
    const target = new Date(); // create a new Date object for the target time
    target.setHours(hour, minute, second, 0); // set the target time
    if (target <= now) {
      // if the target time has already passed, add a day to it
      target.setDate(target.getDate() + 1);
    }
    const timeUntilTarget = target.getTime() - now.getTime(); // calculate the amount of time until the target time
    callback(); // execute the callback function
  }, 24 * 60 * 60 * 1000); // repeat every 24 hours (in milliseconds)
}

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
