let elements: Array<String> = ["apple", "banana", "cherry", "banana", "banana"];
const index = elements.indexOf("banana");

console.log("index to be removed", index);

if (index > -1) {
    elements.splice(index, 1)
}

console.log("After removal using splice: ", elements); // ["apple", "cherry"]

const newArr = elements.filter(item => item !== "banana");

console.log("Filer by element: " , newArr); // ["apple", "cherry"]

const newArr1 = elements.filter( (_, ind) => ind !== index);

console.log("Filer by index: " , newArr1); // 

const indexes = elements.findIndex( (value, index) => {
    let allindexes: Array<number> = [] ;
    if(value === "banana")
    {
        allindexes.push(index)
    }

    return allindexes;

});

console.log("All indexes of banana", indexes)

const newArr2 = elements.filter( (_, ind) => ind !== indexes);

console.log("Filer by index: " , newArr2); // 
 
