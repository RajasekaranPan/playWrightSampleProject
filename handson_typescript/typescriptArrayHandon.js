var elements = ["apple", "banana", "cherry", "banana", "banana"];
var index = elements.indexOf("banana");
console.log("index to be removed", index);
if (index > -1) {
    elements.splice(index, 1);
}
console.log("After removal using splice: ", elements); // ["apple", "cherry"]
var newArr = elements.filter(function (item) { return item !== "banana"; });
console.log("Filer by element: ", newArr); // ["apple", "cherry"]
var newArr1 = elements.filter(function (_, ind) { return ind !== index; });
console.log("Filer by index: ", newArr1); // 
var indexes = elements.findIndex(function (value, index) {
    var allindexes = [];
    if (value === "banana") {
        allindexes.push(index);
    }
    return allindexes;
});
console.log("All indexes of banana", indexes);
var newArr2 = elements.filter(function (_, ind) { return ind !== indexes; });
console.log("Filer by index: ", newArr2); // 
