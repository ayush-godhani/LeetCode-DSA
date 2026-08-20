// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] === nums[j])
//                 return true;
           
//         }
//     }
//     return false;
// };

 //console.log(containsDuplicate([1,2,4,5,1]));

var containsDuplicate = function(nums){
    let set = new Set();

    for(let num of nums){
        if(set.has(num)){
            return true;
        }
        set.add(num);
    }
    return false;
}

console.log(containsDuplicate([1,2,4,5,1]));