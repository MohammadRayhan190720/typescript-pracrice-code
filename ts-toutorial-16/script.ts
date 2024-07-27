// module export and import

// import { studentName as name ,studentAge as age } from "../index";

//   function studentInfo(): void {
//    console.log(`studentName: ${name},studentAge: ${age}`);
//  }
// studentInfo();
// import * as Student from "../index";

//   function studentInfo(): void {
//    console.log(`studentName: ${Student.studentName},studentAge: ${Student.studentAge}`);
//  }
// studentInfo();

import{Student} from "../index";

let student1 = new Student("Rayhan", 24);
student1.display();

