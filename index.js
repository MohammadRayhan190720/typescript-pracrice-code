"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// export let studentName: String = "Rayhan";
//  export let studentAge: number = 24;
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
exports.Student = Student;
