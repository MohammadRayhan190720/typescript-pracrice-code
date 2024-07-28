// generics basics

function printUserInfo<X,Y>(userName: X, userAge:Y){
  console.log(`username: ${userName}, userAge: ${userAge}`);
}

printUserInfo("Rayhan",24);
printUserInfo(121,22);
printUserInfo(true,22);
// arrow function
const userInfo = <R,Z> (userId:R,userCountry:Z) =>{
  console.log(`userId: ${userId}, userCountry: ${userCountry}`);

}

userInfo(101,"Jonh");