# 1. Basic Typescript Topics  
---

## 1.1 Introduction to Typescript
### What is TypeScript?

- In a simple words, Additional Types (tuples, enum, interfaces, generics etc) + JavaScript = TypeScript  
- It is a superset of JS  
- developed (2012) and maintained by Microsoft  
- we can use typeof to check data type  
- Js is dynamically types -> let x = 20;  
- Typescript add static typing to js -> let x: number = 20;  

### Why TypeScript?  

- JS Check types in run time while typescript add static typing to JS so we can handle errors before running the program. We can handle errors beofre running the program.  
- increase readability and code quality  
- We can use it React, Vue, popular JS libraray Angular use TypeScript.  
- It can be used in both: client and server side.  
- Intellisense IDE Support while coding: code completion, content assist and code hinting.
  
### Code Example of Javascript and TypeScript  
``` javascript
// index.js
// without typescript
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(20, 30);
addNumbers(20, '30');

// with typescript
// without typescript
function addNumbers(num1: number, num2: number) {
  console.log(num1 + num2);
}

addNumbers(20, 30); // no error
addNumbers(20, '30'); // error

// without typescript
let x;
x = 20; // correct
x = 'anisul'; // correct
x = true; // correct
x = [10, 20]; // correct

// with typescript
let x: number;
x = 20; // correct
x = '20'; // Not correct
x = true; // Not correct
x = [10, 20]; // Not correct

```
### How does typescript work?  
- index.ts -> tsc index.ts -> index.js
  
### Environment setup  

-install node and Typescript

```
 local installation: npm intsall typescript --save-dev/
 global installation: npm install -g typescript

```

### check previous version

```
 node --version
  npm --version
  tsc --version
 ```

### First typescript program  
- typescript file extension is .ts
  
- Run the following program using tsc index.ts --watch command and then node index.js

``` typescript

// correct one using ts
function addNumbers(num1: number, num2:number) {
  console.log(num1 + num2);
}

addNumbers(20, 30);
addNumbers(20, "30");


let num1 = 20;
console.log(num1);

let name= "anisul islam";
name. //intellisense support will be here
```

## 1.2 Data Types: Built-in(Basic Types) and User Defined Type  
- Any (super type)
  - built in types: number, string, boolean, void, null, undefined, never
  - user-defined types:union, object, Arrays,Tuple, Enums, Classes, interfaces etc

In TypeScript, you can use basic types to specify the type of variables, function parameters, and return values. Here are some of the basic types in TypeScript:    

1. <b> number: </b> Represents both integer and floating-point numbers.  
   ``` typescript  
    let age: number = 25;
    let price: number = 9.99;
  
2. <b> string: </b> Represents a sequence of characters.
   ` let name: string = 'John'; `
   
3. <b> boolean: </b>  Represents a true or false value.
   `let isDone: boolean = false;`

4. <b> any: </b> Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values
   ``` typescript
   let data: any = 42;
   data = 'Hello';

   let password: any;
   let passwords: any[];

5. <b> void: </b> Represents the absence of a value, typically used as the return type of functions that don't return anything.
   ```typescript
   function logMessage(): void {
   console.log('This is a log message.');
   }
6. null and undefined: Represent null and undefined values, respectively.
   ```typescript
   let n: null = null;
   let u: undefined = undefined;

7. never: Represents a value that never occurs, such as a function that throws an error or an infinite loop.
```javascript
function throwError(message: string): never {
  throw new Error(message);
}
```
These basic types provide a foundation for specifying the types of variables and data in TypeScript. You can use them to ensure type safety in your code and catch type-related errors at compile time.

## 1.3 Data Types: User defined
1. <b> union:</b> Union Type - more than one type for variable or function parameter.
 ```typescript
  let userId: string | number;

 // userId = 101; // no error
 // userId = "101"; // no error
// userId = true; // error

function userIdDataType(userId: string | number) {
  console.log(typeof userId);
}

userIdDataType('123'); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error

const isEven = (num: number | string) => {
  if (typeof num === 'number') {
    console.log(typeof num);
    return num % 2 === 0 ? 'even' : 'odd';
  } else {
    console.log(typeof num);
    return Number(num) % 2 === 0 ? 'even' : 'odd';
  }
};

console.log(isEven(32));
console.log(isEven('32'));
```

2. <b> Objects{ } : <b/>  Represents any non-primitive value.
``` typescript
let person: object = { name: 'Alice', age: 30 };

let user: {
  name: string;
  age: number;
};

user = {
  name: 'anisul islam',
  age: 32,
};

let names: object;
names = { name1: 'anis' };
console.log(names);

let users: object[];
users = [];

let user1: { userName: string; userId: number };
user1 = { userName: 'anis', userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: 'rabu', userId: 102 };

users.push(user2);

for (const key in users) {
  console.log(users[key]['userName']);
}
```
3.<b>array: <b/> Represents an array of values of a specific type. 2 ways to declare: number[] or Array<number>
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// let users = ["anis", "rabu", "pinky"];

// let users: string[];
// users = ["anis", "rabu", "pinky"];

let users: Array<string>;
users = ['anis', 'rabu', 'pinky'];

// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   console.log(element);
// }

// users.forEach((element) => {
//   console.log(element);
// });

users.sort();
console.log(users);

users.push('limon');
console.log(users);

users.pop();
console.log(users);

users.unshift('milton');
console.log(users);

users.shift();
console.log(users);

// multi-types array
// let users: (number | string)[];
// users = [10, "anis", 25, 35, "islam"];
```
4. <b> tuple: </b> Represents an array with a fixed number of elements, each with a specific type.
```typescript
let employee: [string, number] = ['John Doe', 30];

let users: [number, String];
users = [101, 'anis'];

console.log(users);
console.log(users[0]);
console.log(users[1]);

users.push(102, 'sakib');
console.log(users);
```
6. <b> enum: </b> Represents a set of named constants. no duplicate data.
```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Red;

// enum example
// helps us to store constants

// numeric enum
enum UserRequest {
  ReadData,
  // ReadData = 2,
  SaveData,
  UpdateData,
}

console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);

// string enum
enum UserRequest {
  ReadData = 'READ_DATA',
  // ReadData = 2,
  SaveData = 'SAVE_DATA',
  UpdateData = 'UPDATE_DATA',
}

console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log(UserRequest['UpdateData']);

// Heterogeneous enum
enum User {
  id = 101,
  name = 'anisul',
}
```
7. Intersection: In TypeScript, you can use intersection types to combine multiple types into a single type that has all the properties and methods of each type. Intersection types are created using the & operator. Here's an example:
```typescript
// Define two types
type Employee = {
  name: string;
  role: string;
};

type Manager = {
  department: string;
  employeesManaged: number;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Create an object that conforms to the intersection type
const manager: ManagerWithEmployeeInfo = {
  name: 'Alice',
  role: 'Manager',
  department: 'HR',
  employeesManaged: 10,
};

// Access properties
console.log(manager.name); // Alice
console.log(manager.role); // Manager
console.log(manager.department); // HR
console.log(manager.employeesManaged); // 10

In this example, we define two types: Employee and Manager. Then, we create an intersection type called ManagerWithEmployeeInfo by combining Employee and Manager using the & operator. The resulting type, ManagerWithEmployeeInfo, has all the properties of both Employee and Manager.

When we create an object (manager) that conforms to the ManagerWithEmployeeInfo type, it must have all the properties defined in both Employee and Manager. This allows us to create objects that have a combination of properties from different types, providing flexibility and type safety.

Intersection types are especially useful when you want to compose types to represent complex objects or data structures in your TypeScript code.
```
8. <b> Custom Type: </b> you can create your own type
```typescript
type User = { userName: string, userId: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: 'anis', userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: 'rabu', userId: 102 };
users.push(user2);

let user3: User;
user3 = { userName: 'lucky', userId: 103 };
users.push(user3);

// console.log(users);

type RequestType = 'GET' | 'POST';
let getRequest: RequestType;
getRequest = 'GET';

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler('GET');
```
8. class Type OOP - You can create class type as well. class can have constructor, properties, methods. create object let objectName = new className()
- Class and constructor Example
```typescript
class User {
  // properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User('Rayhan', 24);
user1.display();

let user2 = new User('Tamanna', 18);
user2.display();
```
- Inheritance: inheritance helps us to acquire properties of one class to another
```typescript
class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student('keya', 31, 1302020015);
student1.display();

let user1 = new User('Anisul Islam', 25);
user1.display();

// let user2 = new User("Rabeya Islam", 31);
// user2.display();
```
- Abstract class
  - abstraction helps us to hide the implementation of something.
  - class declared with abstract keyword.
  - object can not be created from abstract class.
  -  if a class extends abstract class; it must inherit all the abstract methods
```typescript
abstract class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  abstract display(): void;
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("keya", 31, 1302020015);
student1.display();
```
- Encapsulation and access modifiers - 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism. Encapsulation helps us to manage the visibility of class members. 4 Access modifiers: public, private, protected, readonly
![access-modifier.png](./images/access-modifiers.png);










  








  
