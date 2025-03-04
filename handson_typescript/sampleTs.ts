interface User {
    id: number;
    name: string;
}

function getInfo()
{
    console.log("PASS");


    let userMap = new Map<number, any>();

// Add key-value pairs
userMap.set(1, {name: "Alice", age: 50});
userMap.set(2, "Bob");

console.log(userMap.get(1).name); // Output: Map { 1 => 'Alice', 2 => 'Bob' }


let userDetails = new Map<number, User>();

userDetails.set(1, { id: 101, name: "Raja" });
userDetails.set(2, { id: 102, name: "Bob" });

console.log(userDetails.get(1)?.name); // Output: Alice

}

getInfo();
