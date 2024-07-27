// Abstract class
 abstract class Student {
  studentName: string;
  age: number;

  constructor(studentName: string, age: number) {
    this.studentName = studentName;
    this.age = age;
  }

   abstract display(): void;
}


class User extends Student {
  studentId: number;

  constructor(studentName: string, age: number, studentId: number) {
    super(studentName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`studentName: ${this.studentName},age: ${this.age},studnetId: ${this.studentId}`);
  }
}

let user1 = new User("Tamanna",18, 101);
user1.display();

