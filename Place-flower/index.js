/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let l = i === 0 ? 0 : flowerbed[i - 1];
    let c = flowerbed[i];
    let m = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
    if (l + c + m === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 1],1));
