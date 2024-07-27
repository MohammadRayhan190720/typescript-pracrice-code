// build in data type-number,string,boolean,void,null,undefined

let userID : number;
let fristName : string;
let lastName : string;
let fullName : string;
let isActivated : boolean;

userID =101;
fristName ="Mohammad";
lastName = " Rayhan";
isActivated = true;

fullName = fristName.concat(lastName);



console.log(`your userID: ${userID},username: ${fullName}, Account Activeted: ${isActivated}`);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userID.toLowerCase());

// void data type

function displayName() : void{
console.log("hi");
};
displayName();