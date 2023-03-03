// build table accourding to exsisting requests 
build_request_table();


//get current date 
now = new Date();
yyyy = now.getFullYear();
mm = now.getMonth();
dd = now.getDate();



function addNewUser(accept) {

    // get row index that contain data
    let row = accept.parentElement.parentElement;

    // get email
    const children = row.children;
    emailcell = children.item(1);
    let requestEmail = emailcell.innerText;

    // update request array
    let requests = localStorage.getItem('requests');
    requests = JSON.parse(requests);

    newUser = requests.filter((o) => o.email === requestEmail);
    requests = requests.filter((o) => o.email !== requestEmail);

    requestsJSON = JSON.stringify(requests);
    localStorage.setItem('requests', requestsJSON);

    //set user name and password 
    newUser = newUser[0]
    newUser['username'] = generateString(5);
    newUser['password'] = generateString(8);
    newUser['super'] = false;
    newUser['attendance'] = { years: {} };

    let users = localStorage.getItem('users');
    users = JSON.parse(users);
    users.push(newUser)

    usersJSON = JSON.stringify(users);
    localStorage.setItem('users', usersJSON);

    // remove row at the end
    table = row.parentElement;
    table.removeChild(row);

    // send email to the accepted request with new username and passsword
    (function() {
        // Initialize EmailJS with your User ID
        emailjs.init('iwasOWXvMgCRtPJ2y');
      
        // Define your email parameters
        var emailParams = {
          to_name: newUser.fname,
          to_email:newUser.email,
          from_name: 'admin',
          message: "username : " + newUser.username + " & password = " + newUser.password,
        };
      
        // Send the email
        emailjs.send('service_jnd0geb', 'template_fj32udp', emailParams)
          .then(function(response) {
            console.log('Email sent successfully:', response.status, response.text);
          }, function(error) {
            console.log('Email failed to send:', error);
          });
      })();
}

function removeRow(accept) {


    // get row 
    let row = accept.parentElement.parentElement;

    // get email
    const children = row.children;
    emailcell = children.item(1);
    let requestEmail = emailcell.innerText;

    // update request array
    let requests = localStorage.getItem('requests');
    requests = JSON.parse(requests);

    requests = requests.filter((o) => o.email !== requestEmail);
    //requests= Object.fromEntries(requests);
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

function build_request_table() {
    let requests = localStorage.getItem('requests');
    tableBody = document.getElementById('tb-request');
    requests = JSON.parse(requests);
    requests.forEach(element => {
        newRow = document.createElement('tr')
        newRow.innerHTML = `<td>${element['fname'] + " " + element['lname']}</td> <td id = 'email-id'>${element['email']}</td> <td>${element['address']}</td>`
        newBtncell = document.createElement('td')
        newBtncell.innerHTML = "<input type='button'class='btn btn-primary' value ='Accept' onclick=' addNewUser(this)'>" +
            "<input type='button' style='background-color: aliceblue;color:black' class='btn btn-primary' value ='Reject' onclick='removeRow(this)'>"
        newRow.appendChild(newBtncell);
        tableBody.appendChild(newRow);
    });
}
