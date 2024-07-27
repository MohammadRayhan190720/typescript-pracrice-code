//enum-store constants;duplicate value is not allowed hare
//Enum types-numeric,string,hetergenous
// numeric
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["saveData"] = 2] = "saveData";
    requestType[requestType["deleteData"] = 3] = "deleteData";
})(requestType || (requestType = {}));
// console.log(requestType);
// console.log(requestType.deleteData);
// console.log(requestType["saveData"]);
//string enum
var requestType1;
(function (requestType1) {
    requestType1["writeData"] = "ABCD";
    requestType1["workData"] = "nothing";
    requestType1["deleteData"] = "Every-thing";
})(requestType1 || (requestType1 = {}));
console.log(requestType1);
console.log(requestType1.workData);
console.log(requestType1["writeData"]);
// hetergenous
var requestType2;
(function (requestType2) {
    requestType2["writeData"] = "writeData";
    requestType2["workData"] = "work-Data";
    requestType2[requestType2["id"] = 101] = "id";
})(requestType2 || (requestType2 = {}));
