function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
// addNumbers(20, 30);
// addNumbers(30, "40");
function userIdDataType(userId) {
    // console.log(typeof userId);
    // console.log(userId);
}
userIdDataType("123");
userIdDataType(123);
// const isEven = (num: number | string) => {
//   if (typeof num === "number") {
//     console.log(typeof num);
//     return num % 2 === 0 ? "even" : "odd";
//   } else {
//     console.log(typeof num);
//     return Number(num) % 2 === 0 ? "even" : "odd";
//   }
// };
// console.log(isEven(32));
// console.log(isEven("25"));
var isEven = function (num) {
    if (typeof num === "number") {
        console.log(typeof num);
        return num % 2 === 0 ? "even" : "odd";
    }
    else {
        console.log(typeof num);
        {
            return Number(num) % 2 === 0 ? "even" : "odd";
        }
    }
};
console.log(isEven("50"));
