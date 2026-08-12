/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!"aeiouAEIOU".includes(s[i])) {
      i++;
    } else if (!"aeiouAEIOU".includes(s[j])) {
      j--;
    } else {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;

      i++;
      j--;
    }
  }

  return s.join("");
};
