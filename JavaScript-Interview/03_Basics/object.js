const data = {
    users: [
        {
            "id": 1,
            "name": "Amit Sharma",
            "email": "amit.sharma@example.com",
            "age": 24,
            "role": "user",
            "isActive": true
        },
        {
            "id": 2,
            "name": "Neha Verma",
            "email": "neha.verma@example.com",
            "age": 22,
            "role": "admin",
            "isActive": true
        },
        {
            "id": 3,
            "name": "Rahul Khan",
            "email": "rahul.khan@example.com",
            "age": 26,
            "role": "user",
            "isActive": false
        },
        {
            "id": 4,
            "name": "Priya Singh",
            "email": "priya.singh@example.com",
            "age": 23,
            "role": "editor",
            "isActive": true
        },
        {
            "id": 5,
            "name": "Sahil Gupta",
            "email": "sahil.gupta@example.com",
            "age": 25,
            "role": "user",
            "isActive": false
        }
    ]
}

const h = data.users.filter((user) => user.id === id)

console.log(h);
