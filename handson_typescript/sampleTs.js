function getInfo() {
    var _a;
    console.log("PASS");
    var userMap = new Map();
    // Add key-value pairs
    userMap.set(1, { name: "Alice", age: 50 });
    userMap.set(2, "Bob");
    console.log(userMap.get(2).name); // Output: Map { 1 => 'Alice', 2 => 'Bob' }
    var userDetails = new Map();
    userDetails.set(1, { id: 101, name: "Raja" });
    userDetails.set(2, { id: 102, name: "Bob" });
    console.log((_a = userDetails.get(1)) === null || _a === void 0 ? void 0 : _a.name); // Output: Alice
}
getInfo();
