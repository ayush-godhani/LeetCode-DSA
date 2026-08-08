/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var gcdOfStrings = function(word1, word2) {
    if (word1 + word2 !== word2 + word1) {
        return "";
    }

    let gcd = function(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    let length = gcd(word1.length, word2.length);

    return word1.substring(0, length);
};