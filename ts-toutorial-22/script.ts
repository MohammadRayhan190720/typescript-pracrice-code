// narrowing types

function printTodos (todos : string[] | null): void {
 if ( todos){
   todos.map((todo) => console.log(todo));

 } else {
  console.log("no todos found");

 }

}

const todos = ["todos1","todos2"];

// printTodos(todos);
printTodos(null);
