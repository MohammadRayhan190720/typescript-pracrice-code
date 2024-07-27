// class and object

class Student {

  studentName: string;
  age: number;

  constructor(studentName: string, age: number) {
    this.studentName = studentName;
    this.age = age;

  }

  display():void{
    console.log(`studentName: ${this.studentName},age: ${this.age}`);
  }

}

let student1 = new Student("Rayhan",24);

let student2 = new Student("Tamanna",25);
let student3 = new Student("Jakia",20);
student1.display();
student2.display();
student3.display();
