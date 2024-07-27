// Encapsulationa and access modifiers

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

class Student {
  studentName: string;
   age: number;

  constructor(studentName: string, age: number) {
    this.studentName = studentName;
    this.age = age;
  }

  display(): void {
    console.log(`studentName: ${this.studentName},age: ${this.age}`);
  }
}
let student1 = new Student("Rayhan", 24);


class User extends Student {
private studentId: number;

  constructor(studentName: string, age: number, studentId: number) {
    super(studentName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(`studentName: ${this.studentName},age: ${this.age},studnetId: ${this.studentId}`);
  }

  setStudentId(studentId:number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

let user1 = new User("Tamanna",18, 101);
// user1.display();
user1.setStudentId(102);
console.log(user1.getStudentId())


let student2 = new Student("Jakia",14);
// student2.studentName = "Sakib"; error hare
// console.log(student2);


