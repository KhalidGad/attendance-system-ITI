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
        username: 'admin',
        password: 'admin'
    },
    {
        fname: 'khaled',
        lname: 'gad',
        address: 'mansoura',
        email: 'khaled@gmail.com',
        age: 22,
        super: true,
        username: 'khaled',
        password: '1234',
        attendance: {
            years: {
                2023:{
                    months:{
                        1:{
                            atted : 20,
                            late : 5,
                            absent : 10,
                            days: {
                                1 : {
                                    start:'8:00',
                                    end : '12:00'
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    {
        fname: 'ahmed',
        lname: 'nabil',
        address: 'mansoura',
        email: 'khaled@gmail.com',
        age: 26,
        super: false,
        username: 'khaled2',
        password: '1234',
        attendance: [
            {
                year: 2023,
                months: [
                    {
                        month: 1,
                        attend: 20,
                        late: 5,
                        absent: 10,
                        days: [
                            {
                                day: 1,
                                start: '8:00',
                                end: '12:00'
                            }
                        }
                    }
                }
            }
        }
        
    }
];

requestsJSON = JSON.stringify(requests);
localStorage.setItem('requests', requestsJSON);

usersJSON = JSON.stringify(users);
localStorage.setItem('users', usersJSON);