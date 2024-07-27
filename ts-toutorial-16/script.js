"use strict";
// module export and import
Object.defineProperty(exports, "__esModule", { value: true });
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
var index_1 = require("../index");
var student1 = new index_1.Student("Rayhan", 24);
student1.display();
