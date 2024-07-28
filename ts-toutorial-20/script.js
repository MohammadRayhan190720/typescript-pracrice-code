// interface as types
var users = [];
var user1 = {
    id: 101,
    name: "Joni",
    age: 25
};
var user2 = {
    id: 102,
    name: "Roki",
    age: 24
};
users.push(user1);
users.push(user2);
// console.log(users);
var userInfo = function (user) {
    console.log("userId ".concat(user.id, ",name ").concat(user.name, ",age ").concat(user.age));
};
users.forEach(function (user) { return userInfo(user); });
