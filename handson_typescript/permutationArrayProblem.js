var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function permutation(arr) {
    //var finalResult : [][]= [[]];
    if (arr.length === 0)
        return [[]]; // Base case: empty array returns [[]]
    var result = [[]];
    var _loop_1 = function (i) {
        var current = arr[i]; // Pick an element
        var remaining = __spreadArray(__spreadArray([], arr.slice(0, i), true), arr.slice(i + 1), true); // Exclude picked element
        var perms = permutation(remaining); // Get permutations of remaining elements
        result.push.apply(// Get permutations of remaining elements
        result, perms.map(function (p) { return __spreadArray([current], p, true); })); // Append current element to each permutation
    };
    /*
    
    let numberOfOutputs: number = factorial(input.length);

    console.log("numberOfOutputs:", numberOfOutputs);
    
    for(let i=0; i< numberOfOutputs-1; i++)
    {
        let item = input[i];

        let remainingItems = input.filter((value) => {return value!==item});

        console.log("current item: ", item);
        console.log("remainingItems: " + remainingItems);


    }


    */
    for (var i = 0; i < arr.length; i++) {
        _loop_1(i);
    }
    return result;
}
var input = [];
input = [1, 2, 3];
//console.log(permutation(input));
try {
    //console.log(factorial(input.length));
    var result1 = permutation(input);
    console.log("Result: ", result1);
}
catch (err) {
    console.log(err);
}
function factorial(numbers) {
    console.log("Number: ", numbers);
    if (numbers === 0) {
        return 1;
    }
    if (numbers < 0)
        throw new Error('Not Valid');
    return numbers * factorial(numbers - 1);
}
