// class and object
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
var student2 = new Student("Tamanna", 25);
var student3 = new Student("Jakia", 20);
student1.display();
student2.display();
student3.display();
