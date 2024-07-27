//enum-store constants;duplicate value is not allowed hare
//Enum types-numeric,string,hetergenous

// numeric
enum requestType {
  readData = 1,
  saveData,
  deleteData,
}
// console.log(requestType);
// console.log(requestType.deleteData);
// console.log(requestType["saveData"]);

//string enum

enum requestType1{
  writeData = "ABCD",
  workData = "nothing",
  deleteData = "Every-thing"
}

console.log(requestType1);
console.log(requestType1.workData);
console.log(requestType1["writeData"]);

// hetergenous
enum requestType2 {
  writeData = "writeData",
  workData = "work-Data",
  id=101
}
