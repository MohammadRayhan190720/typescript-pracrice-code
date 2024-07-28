//class implementing interface
var User = /** @class */ (function () {
    // fullName:string;
    // age:number;
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "name:".concat(_this.fullName, ",age:").concat(_this.age);
        };
        // this.fullName = fullName;
        // this.age = age;
    }
    return User;
}());
var user = new User("Joni", 24);
// console.log(user);
console.log(user.formatUser());
