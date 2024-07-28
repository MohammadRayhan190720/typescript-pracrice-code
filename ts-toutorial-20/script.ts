// interface as types

interface Iusers {
  id: number;
  name: string;
  age: number;
}

let users: Iusers[] = [];



let user1 : Iusers = {
  id: 101,
  name: "Joni",
  age: 25
}
let user2 : Iusers = {
  id: 102,
  name: "Roki",
  age: 24
}

users.push(user1);
users.push(user2);

// console.log(users);
const userInfo = ( user :Iusers) =>{
 console.log(`userId ${user.id},name ${user.name},age ${user.age}`);
}

users.forEach (user => userInfo(user))