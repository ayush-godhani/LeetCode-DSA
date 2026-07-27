/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let num3 = [...nums1, ...nums2];

    num3.sort((a, b) => a - b);

    let n = num3.length;
    
    if (n % 2 === 0) {
        return (num3[n / 2 - 1] + num3[n / 2]) / 2;
    } else {
        return num3[Math.floor(n / 2)];
    }
};

// Example test
console.log(findMedianSortedArrays([1, 3], [2]));      // 2
console.log(findMedianSortedArrays([1, 2], [3, 4]));   // 2.5