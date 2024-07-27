var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class
var Student = /** @class */ (function () {
    function Student(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    return Student;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(studentName, age, studentId) {
        var _this = _super.call(this, studentName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    User.prototype.display = function () {
        console.log("studentName: ".concat(this.studentName, ",age: ").concat(this.age, ",studnetId: ").concat(this.studentId));
    };
    return User;
}(Student));
var user1 = new User("Tamanna", 18, 101);
user1.display();
