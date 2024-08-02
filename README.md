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
![access-modifier.png](./images/access-modifiers.png)

```typescript
  // public, private, protected, readonly
  // setter and getter
  class User {
    readonly userName: string;
    public age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }

    setStudentId(studentId: number): void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }

  let student1 = new Student("keya", 31, 1302020015);
  student1.setStudentId(1302020017);
  console.log(student1.getStudentId());
  // student1.display();

  let user1 = new User("robi", 23);
  console.log(user1.userName);
  // user1.display();
```

#### Inheritance
Inheritance allows a class to inherit properties and methods from another class.

#### Encapsulation
Encapsulation restricts direct access to some of an object's components, which can be achieved using access modifiers ####(private, protected, public).

#### Polymorphism
Polymorphism allows methods to do different things based on the object it is acting upon, even though they share the same name.

#### Abstraction
Abstraction allows you to define methods that must be created within any child classes built from the abstract class.

Here’s an example that demonstrates all four principles:
```typescript
// Abstract class (Abstraction)
abstract class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  // Abstract method
  abstract getDescription(): string;
}

// Student class (Inheritance)
class Student extends Person {
  private _grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this._grade = grade;
  }

  get grade(): number {
    return this._grade;
  }

  // Implementing abstract method (Polymorphism)
  getDescription(): string {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Teacher class (Inheritance)
class Teacher extends Person {
  private _subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  // Implementing abstract method (Polymorphism)
  getDescription(): string {
    return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

// Create instances and demonstrate polymorphism
const student = new Student("Alice", 20, 90);
const teacher = new Teacher("Bob", 45, "Mathematics");

console.log(student.getDescription()); // Student: Alice, Age: 20, Grade: 90
console.log(teacher.getDescription()); // Teacher: Bob, Age: 45, Subject: Mathematics

// Encapsulation: attempting to access private properties directly will result in an error
// console.log(student._name); // Error: Property '_name' is private and only accessible within class 'Person'.
// console.log(teacher._subject); // Error: Property '_subject' is private and only accessible within class 'Teacher'.

// Use getter methods to access encapsulated properties
console.log(student.name); // Alice
console.log(teacher.subject); // Mathematics
```
#### Explanation
1. Abstraction:
 - The Person class is abstract and contains an abstract method getDescription.
 - This method must be implemented by any non-abstract subclass of Person.
2. Encapsulation:
   - Private properties (_name, _age, _grade, _subject) are used to restrict direct access.
   - Getter methods (get name(), get age(), get grade(), get subject()) are provided to access these private properties.
3. Inheritance:
 - The Student and Teacher classes inherit from the Person class.
 - They call the constructor of the parent class using super(name, age).
4. Polymorphism:
   - Both Student and Teacher implement the getDescription method from the Person class.
   - This method behaves differently based on whether it's called on a Student or Teacher instance.
  
This example demonstrates how you can use these OOP principles in TypeScript to create a well-structured and maintainable codebase.

### 9. Interface type

```typescript
// without interface
let users: {
  id: number,
  name: string,
  age: number,
}[] = [];

let user1: {
  id: number,
  name: string,
  age: number,
} = {
  id: 1,
  name: 'Mr. Potato',
  age: 32,
};

let user2: {
  id: number,
  name: string,
  age: number,
} = { id: 2, name: 'Ms. Tomato', age: 21 };

users.push(user1);
users.push(user2);

const printUserInfo = (user: { id: number, name: string, age: number }) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));

// with interface
interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];

let user1: User = { id: 1, name: 'Mr. Potato', age: 32 };
let user2: User = { id: 2, name: 'Ms. Tomato', age: 21 };

users.push(user1);
users.push(user2);

const printUserInfo = (user: User) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));
```
```typescript
    // class implements interface
    interface UserFormatter {
      formatUser: () => string;
    }

      export class User implements UserFormatter {
        constructor(private fullName: string, private age: number) {}

        formatUser = () => {
          return `name: ${this.fullName}, age: ${this.age}`;
        };
      }

      let user = new User("Mr. Potato", 32);
      console.log(user);
      console.log(user.formatUser());
```

### 10. Interface vs type
- both are nearly similar in most cases.
- However, Adding new filed after creation is possible for an interface but not possible for a type.
```typescript
// Example 1
interface Color {
  title: string;
}
interface Color {
  text: string;
}
// now class A has access to title and string
class A implements Color {
  title: string;
  text: string;
}
```
- both can be extended
```typescript
interface IFUser {
  name: string;
}

interface IFStudent extends IFUser {
  student_id: string;
}

// Extending a type via intersections
type User = {
  name: string,
};

type Student = User & {
  student_id: string,
};

let s1: Student;
s1 = {
  name: 'anisul islam',
  student_id: '1302',
};
```
```typescript
interface IFUser {
  name: string;
}

interface IFStudent extends IFUser {
  student_id: string;
}

class Student implements IFStudent {
  name: string;
  student_id: string;

  constructor(name, student_id) {
    this.name = name;
    this.student_id = student_id;
  }

  printDetails = () => {
    return `${this.name}, ${this.student_id}`;
  };
}

const s1 = new Student('anisul islam', '1302020017');
console.log(s1.printDetails());
```
### 1.4 tsconfig
- in terminal -> tsc --init
- edit tsconfig.json as shown in the following example

```jSON
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./public",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["./src"],
  "files": ["./src/index.ts", "./src/app.ts"]
}
```
### 1.5  function

Explore TypeScript function types, including defining function signatures and using optional and default parameters.

Sure, let's explore functions in TypeScript with some code examples. TypeScript is a statically typed superset of JavaScript, so you'll notice type annotations to specify the types of parameters and return values. This helps catch type-related errors at compile time.

#### Basic Function in TypeScript:
```typescript
function add(a: number, b: number): number {
    return a + b;
}

const result: number = add(5, 3); // 'result' will be 8
```
#### Function with Default Parameter:
You can specify default values for function parameters:

```typescript
function greet(name: string = "User"): string {
    return `Hello, ${name}!`;
}

const message: string = greet(); // 'message' will be "Hello, User!"
```
In this example, the name parameter has a default value of "User". If you don't provide an argument when calling greet, it uses the default value.


#### Function with Rest Parameters:
Rest parameters allow you to pass an arbitrary number of arguments as an array:

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

const total: number = sum(1, 2, 3, 4, 5); // 'total' will be 15
```
The ...numbers syntax collects all arguments passed to the sum function into an array called numbers.

#### Function with Callback:
You can pass functions as parameters to other functions:

```typescript
function calculate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const addition = (x: number, y: number) => x + y;
const subtraction = (x: number, y: number) => x - y;

const result1: number = calculate(5, 3, addition);      // 'result1' will be 8
const result2: number = calculate(5, 3, subtraction);   // 'result2' will be 2
```

- Function signature

```typescript
// function signature
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string) => string;

userInfo1 = () => {
  console.log('Anisul Islam is 32 years old');
};

userInfo2 = (name: string) => {
  console.log(`${name} is 32 years old`);
};

userInfo3 = (name: string): string => {
  return `${name} is 32 years old`;
};

userInfo1();
userInfo2('Anisul Islam');
console.log(userInfo3('Anisul Islam'));
```
- function signature in interface

```typescript
   interface IUserFormatter{
    formatUser: () => string
  }

  class User implements IUserFormatter{
    constructor(private fullName: string, private age: number){}
    formatUser = () => {
      return `name: ${this.fullName}, age: ${this.age}`
    }
  }
```
###  DOM Manipulation with typescript
- Example-1
```typescript
<body>
  <input type="number" class="input1" placeholder="Enter any number" />
  <input type="number" class="input2" placeholder="Enter any number" />
  <button>Add</button>
  <p></p>
  <script src="./index.js"></script>
</body>
```
``` typescript
const number1 = document.querySelector(".input1") as HTMLInputElement;
const number2 = document.querySelector(".input2") as HTMLInputElement;
const addButton = document.querySelector("button")!;
const result = document.querySelector("p")!;

addButton?.addEventListener("click", () => {
  const sum = Number(number1.value) + Number(number2.value);
  result.textContent = `The result is ${sum}`;
});
```
- Example-2
```typescript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>welcome</h1>
    <form class="user-form">
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" />
      </div>
      <div>
        <label for="useremail">email: </label>
        <input type="email" id="useremail" />
      </div>

      <div>
        <label for="country">Country: </label>
        <select name="country" id="country">
          <option value="bangladesh">bangladesh</option>
          <option value="india">india</option>
        </select>
      </div>

      <div>
        <label for="feedback">feedback: </label>
        <textarea name="feedback" id="feedback" cols="30" rows="5"></textarea>
      </div>
      <button type="submit">save</button>
    </form>
    <script src="../dist/index.js"></script>
  </body>
</html>
```
```typescript
const form = document.querySelector('.user-form') as HTMLFormElement;
console.log(form);

const userNameInput = document.querySelector('#username') as HTMLInputElement;
console.log(userNameInput);

const userEmailInput = document.querySelector('#useremail') as HTMLInputElement;
console.log(userEmailInput);

const userCountrySelect = document.querySelector(
  '#country'
) as HTMLSelectElement;
console.log(userCountrySelect);

const userFeedback = document.querySelector('#feedback') as HTMLTextAreaElement;
console.log(userFeedback);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let userData = {
    userName: userNameInput.value,
    userEmail: userEmailInput.value,
    userCountry: userCountrySelect.value,
    userFeedback: userFeedback.value,
  };
  console.log(userData);
});
```










  








  
