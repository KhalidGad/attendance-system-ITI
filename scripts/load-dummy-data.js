requests = [
    {
        fname: 'gehad',
        lname: 'mohamed',
        address: 'cairo',
        email: 'gehadmohamed8228@gmail.com',
        age: 22
    },
    {
        fname: 'radwa',
        lname: 'hatem',
        address: 'cairo',
        email: 'radwa.hatem.radwan9@gmail.com',
        age: 23
    },
    {
        fname: 'khaled',
        lname: 'gad',
        address: 'mansoura',
        email: 'khaled.626528@gmail.com',
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
                        }   
                    }
                }
            }
        },
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
                        } ,
                        2:{
                            atted : 5,
                            late : 4,
                            absent : 21,
                            days: {
                                1 : {
                                    start:'8:00',
                                    end : '12:00'
                                },
                                2 : {
                                    start:'8:30',
                                    end : '12:45'
                                }
                            }
                        }   
                    }
                }
            }
        },
    },
    {
        fname: 'radwa',
        lname: 'hatem',
        address: 'cairo',
        email: 'radwa@gmail.com',
        age: 32,
        super: false,
        username: 'radwa',
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
                        } ,
                        2:{
                            atted : 5,
                            late : 4,
                            absent : 21,
                            days: {
                                1 : {
                                    start:'8:00',
                                    end : '12:00'
                                },
                                2 : {
                                    start:'8:30',
                                    end : '12:45'
                                }
                            }
                        }   
                    }
                }
            }
        },
    },
    {
        fname: 'gehad',
        lname: 'mphamed',
        address: 'cairo',
        email: 'gehad@gmail.com',
        age: 25,
        super: false,
        username: 'gehad',
        password: '1234',
        attendance: {
            years: {
            }
        },
    }
];

requestsJSON = JSON.stringify(requests);
usersJSON = JSON.stringify(users);

if (localStorage.getItem("requests")=== null)
    localStorage.setItem('requests', requestsJSON);

if(localStorage.getItem("users")=== null)
    localStorage.setItem('users', usersJSON);