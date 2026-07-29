/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let str = digits.join("");
   let num = BigInt(str) + 1n;
    let arr = num.toString().split("").map(Number)  
    console.log(arr);
};
plusOne([9])