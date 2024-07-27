// build in data type-number,string,boolean,void,null,undefined
var userID;
var fristName;
var lastName;
var fullName;
var isActivated;
userID = 101;
fristName = "Mohammad";
lastName = " Rayhan";
isActivated = true;
fullName = fristName.concat(lastName);
console.log("your userID: ".concat(userID, ",username: ").concat(fullName, ", Account Activeted: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userID.toLowerCase());
// void data type
function displayName() {
    console.log("hi");
}
;
displayName();
