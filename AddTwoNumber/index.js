/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => a-b).reverse();
    return [nums[0] - 1] * [nums[1] - 1];
    
};
  
console.log(maxProduct([4,5,2,5]));
