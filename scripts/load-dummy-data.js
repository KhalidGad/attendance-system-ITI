requests = [
    {
        fname: 'gehad',
        lname: 'mohamed',
        address: 'cairo',
        email: 'gehad@gmail.com',
        age: 22
    },
    {
        fname: 'radwa',
        lname: 'hatem',
        address: 'cairo',
        email: 'radwa@gmail.com',
        age: 23
    }
];

users = [
    {
        fname: 'khaled',
        lname: 'gad',
        address: 'mansoura',
        email: 'khaled@gmail.com',
        age: 22,
        username: 'admin',
        password: '1234',
        attendance:[
            {
                month: 1,
                attend: 20,
                late: 5,
                absent: 10,
                days:[]
            }
        ]
    }
];

requestsJSON = JSON.stringify(requests);
localStorage.setItem('requests', requestsJSON);

usersJSON = JSON.stringify(users);
localStorage.setItem('users', usersJSON);