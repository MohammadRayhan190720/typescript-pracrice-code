// function signature

let user1 :() => void;
let user2 :( name : string) => void;
let user3 :( name : string, age:number ) => string;

 user1 =() =>{
  console.log("Hi.I am User1");
}
 user2 =( name:string ) =>{
  console.log(`My name is ${name}`);
}
 user3 =( name:string,age:number ) =>{
  return(`My name is ${name} and I am ${age} years old`);
}
user1();
user2("Rayhan");
console.log(user3("Rayhan",24));