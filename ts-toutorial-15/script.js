// Encapsulationa and access modifiers
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
//access modifiers-public , private ,protected ,readonly
//access modifiers-public
// class Student {
//   studentName: string;
//   age: number;
//   constructor(studentName: string, age: number) {
//     this.studentName = studentName;
//     this.age = age;
//   }
//   display(): void {
//     console.log(`studentName: ${this.studentName},age: ${this.age}`);
//   }
// }
// let student1 = new Student("Rayhan", 24);
// class User extends Student {
//   studentId: number;
//   constructor(studentName: string, age: number, studentId: number) {
//     super(studentName, age);
//     this.studentId = studentId;
//   }
//   display(): void {
//     console.log(`studentName: ${this.studentName},age: ${this.age},studnetId: ${this.studentId}`);
//   }
// }
// let user1 = new User("Tamanna",18, 101);
// user1.display();
// let student2 = new Student("Jakia",14);
// student2.studentName = "Sakib";
// console.log(student2);
// access modifiers-protected
var Student = /** @class */ (function () {
    function Student(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("studentName: ".concat(this.studentName, ",age: ").concat(this.age));
    };
    return Student;
}());
var student1 = new Student("Rayhan", 24);
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
    User.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    User.prototype.getStudentId = function () {
        return this.studentId;
    };
    return User;
}(Student));
var user1 = new User("Tamanna", 18, 101);
// user1.display();
user1.setStudentId(102);
console.log(user1.getStudentId());
var student2 = new Student("Jakia", 14);
// student2.studentName = "Sakib"; error hare
// console.log(student2);
