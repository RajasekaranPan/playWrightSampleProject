//var occurance = {};
// giv.forEach(char => {
//     occurance[char] = (occurance[char] || 0) + 1;
// });
function countOccurrences(arr) {
    var count = new Map();
    arr.forEach(function (char) {
        count.set(char, (count.get(char) || 0) + 1);
    });
    return count;
}
var giv = [2, 5, 9, 3, 2, 9, 5, 8];
console.log(countOccurrences(giv));
