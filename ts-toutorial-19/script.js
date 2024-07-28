// function signature
var user1;
var user2;
var user3;
user1 = function () {
    console.log("Hi.I am User1");
};
user2 = function (name) {
    console.log("My name is ".concat(name));
};
user3 = function (name, age) {
    return ("My name is ".concat(name, " and I am ").concat(age, " years old"));
};
user1();
user2("Rayhan");
console.log(user3("Rayhan", 24));
