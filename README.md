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







  
