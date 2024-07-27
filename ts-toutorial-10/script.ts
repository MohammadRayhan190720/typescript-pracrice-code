// object data type

// let users : object;
// users = {userName: "Rayhan" , id:101}
// console.log(users);

let users : object[];
users =[];


let user1 : { userName: string, userID: number};
user1 = { userName:"Rayhan",userID:101};
users.push(user1);


let user2 : { userName: string, userID: number};
user2 = { userName:"Tamanna",userID:102};
users.push(user2);
// console.log(users);

for (const key in users) {
  console.log(key);
  console.log(users[key]);
  console.log(users[key]["userName"]);

}
