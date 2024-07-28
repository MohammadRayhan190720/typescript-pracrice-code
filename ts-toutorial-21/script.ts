//class implementing interface

interface IformatUser{
  formatUser : () => string;

}

class User implements IformatUser{
  // fullName:string;
  // age:number;


  constructor( private fullName:string, private age:number){
    // this.fullName = fullName;
    // this.age = age;
  }

  formatUser = () => {
    return `name:${this.fullName},age:${this.age}`;
  }
}
let user = new User("Joni",24);
// console.log(user);
console.log(user.formatUser());