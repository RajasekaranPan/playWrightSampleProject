

function permutation(arr: Array<number>): number[][]{

    //var finalResult : [][]= [[]];

    if (arr.length === 0) return [[]]; // Base case: empty array returns [[]]
    

    let result: number[][] = [[]];

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

for (let i = 0; i < arr.length; i++) {
        const current = arr[i]; // Pick an element
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)]; // Exclude picked element
        const perms = permutation(remaining); // Get permutations of remaining elements
        result.push(...perms.map(p => [current, ...p])); // Append current element to each permutation
    }

    return result;
}




var input : Array<number>= [] ;
input = [1,2,3]
//console.log(permutation(input));

try{
 //console.log(factorial(input.length));

 var result1: number[][]= permutation(input);

 console.log("Result: ", result1);
}
catch(err)
{
    console.log(err);
}



function factorial(numbers: number): any{

    console.log("Number: ", numbers);

    if(numbers ===0)
    {
        return 1;
    }
    if(numbers < 0)
       throw new Error('Not Valid');

    return numbers * factorial(numbers -1);
}
