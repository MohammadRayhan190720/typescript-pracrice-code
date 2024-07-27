// object data type
// let users : object;
// users = {userName: "Rayhan" , id:101}
// console.log(users);
var users;
users = [];
var user1;
user1 = { userName: "Rayhan", userID: 101 };
users.push(user1);
var user2;
user2 = { userName: "Tamanna", userID: 102 };
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(key);
    console.log(users[key]);
    console.log(users[key]["userName"]);
}
