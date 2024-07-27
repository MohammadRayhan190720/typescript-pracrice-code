// export let studentName: String = "Rayhan";
//  export let studentAge: number = 24;
export class Student {
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


