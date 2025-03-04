
function findingLargest(inputArray: number[]): number{

    const sortedArray: number[] = inputArray.sort((n1,n2)=> { return n2 -n1 })

    console.log("sortedArray: ", sortedArray);
    return sortedArray[1];
}

const arr: number[] = [3,1,8,2,10,4,9];

const result = (findingLargest(arr));

console.log(result);

