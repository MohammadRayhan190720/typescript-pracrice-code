//how to creat custom data type
var Users;
Users = [];
var user4;
user4 = { userName: "Rayhan", userID: 101 };
Users.push(user4);
var user5;
user5 = { userName: "Tamanna", userID: 102 };
Users.push(user5);
var user6;
user6 = { userName: "Jakhia", userID: 103 };
Users.push(user6);
console.log(Users);
var getRequest;
getRequest = "GET";
getRequest = "POST";
function requesthandler(requestType) {
    console.log(requestType);
}
requesthandler("POST");
