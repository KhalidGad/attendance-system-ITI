// get button of accept
let accept = document.getElementById('accept-btn');

// get button of remove
let remove = document.getElementById('remove-btn');

accept.addEventListener('click', addNewUser);
remove.addEventListener('click', removeRow);

function addNewUser(){

    // get row index that contain data
    let row = accept.parentElement;
    let rowIdx = row.rowIndex; 

    // get email
    let requestEmail = row.getElementById('email-id').innerText;

    // update request array
    let requests = localStorage.getItem('requests');
    requests = JSON.parse(requests);

    let newUser = requests.filter((o)=>o.email===requestEmail);
    requests = requests.filter((o)=>o.email!==requestEmail);

    requestsJSON = JSON.stringify(requests);
    localStorage.setItem('requests', requestsJSON);

    newUser['username'] = generateString(5);
    newUser['password'] = generateString(8);
    newUser['attendance'] = [];

    // newUser = {
    //     fname: 'khaled',
    //     lname: 'gad',
    //     address: 'mansoura',
    //     email: 'khaled@gmail.com',
    //     age: 22,
    //     username: 'admin',
    //     password: '1234',
    //     attendance:[
    //         {
    //             month: 1,
    //             attend: 20,
    //             late: 5,
    //             absent: 10,
    //             days:[]
    //         }
    //     ]
    // }

    // update users array
    let users = localStorage.getItem('users');
    users = JSON.parse(users);
    users.push(newUser);
    usersJSON = JSON.stringify(users);
    localStorage.setItem('users', usersJSON);

    // remove row at the end
    table = row.parentElement;
    table.removeChild(row);
}

function removeRow(){
    // get row
    let row = accept.parentElement;
    // get email
    let requestEmail = row.getElementById('email-id').innerText;

    // update request array
    let requests = localStorage.getItem('requests');
    requests = JSON.parse(requests);

    requests = requests.filter((o)=>o.email!==requestEmail);

    requestsJSON = JSON.stringify(requests);
    localStorage.setItem('requests', requestsJSON);

    // remove row at the end
    table = row.parentElement;
    table.removeChild(row);
}

function generateString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()/*@#$%&';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}