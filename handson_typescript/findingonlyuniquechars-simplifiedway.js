var strvalue = "amiyaranjan";
var strArrayvalue = "amiyaranjan".split('');

var unqiueValues = strArrayvalue
    .filter( (value, index, array) => { return array.indexOf(value) === index; });
console.log(unqiueValues);



var strArrayObjects = [
    { name: "John", age: 30, desc: "desc" },
    { name: "John", age: 30, desc: "desc" },
    { name: "David", age: 31, desc: "desc1" },
    { name: "David", age: 31, desc: "desc1" },
    { name: "Alex", age: 32, desc: "desc2" },
    { name: "Alex", age: 32, desc: "desc2" },
];

console.log(strArrayvalue.findIndex(function (value) { return value.includes("y"); }));

var uniquearraObjs = strArrayObjects.filter(function (value, index, array) {
    return array.findIndex(function (val) { return val.name === value.name; }) === index;
});
console.log(uniquearraObjs);
