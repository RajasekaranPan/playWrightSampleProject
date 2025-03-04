function findingLargest(inputArray) {
    var sortedArray = inputArray.sort(function (n1, n2) { return n2 - n1; });
    console.log("sortedArray: ", sortedArray);
    return sortedArray[1];
}
var arr = [3, 1, 8, 2, 10, 4, 9];
var result = (findingLargest(arr));
console.log(result);
