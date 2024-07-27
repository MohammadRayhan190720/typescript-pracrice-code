//how to creat custom data type



type User = { userName: string; userID: number };

let Users: User[];
Users = [];

let user4: User;
user4 = { userName: "Rayhan", userID: 101 };
Users.push(user4);

let user5: User;
user5 = { userName: "Tamanna", userID: 102 };
Users.push(user5);

let user6: User;
user6 = { userName: "Jakhia", userID: 103 };
Users.push(user6);

console.log(Users);


//2nd example

type RequestType ="GET" | "POST";

let getRequest : RequestType;

getRequest = "GET";
getRequest = "POST";


function requesthandler ( requestType : RequestType){
  console.log(requestType);

}

requesthandler("POST");

