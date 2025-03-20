


//var occurance = {};


// giv.forEach(char => {
//     occurance[char] = (occurance[char] || 0) + 1;
// });



function countOccurrences(arr: number[]): Map<number, number> {
    let count = new Map<number, number>();
    arr.forEach(char => {
        count.set(char, (count.get(char) || 0) + 1);
    });
    return count;
}

const giv: number[] = [2,5,9,3,2,9,5,8];
console.log(countOccurrences(giv));