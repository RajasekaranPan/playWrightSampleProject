const strvalue = "amiyaranjan";
const strArrayvalue = "amiyaranjan".split('');


console.log(strArrayvalue.findIndex((value) => {return value.includes("y")}));

const unqiueValues = strArrayvalue
.filter((value, index, array) => {return array.indexOf(value)===index});

console.log(unqiueValues);

const strArrayObjects = [
  { name: "John", age: 30, desc: "desc" },
  { name: "John", age: 30, desc: "desc" },
  { name: "David", age: 31, desc: "desc1" },
  { name: "David", age: 31, desc: "desc1" },
  { name: "Alex", age: 32, desc: "desc2" },
  { name: "Alex", age: 32, desc: "desc2" },
];

const uniquearraObjs = strArrayObjects.filter((value, index, array) => {
  return array.findIndex((val) => val.name === value.name) === index;
});

console.log(uniquearraObjs);