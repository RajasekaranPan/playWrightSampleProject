var given: string = "This is my programming skills";


var spilittedString = given.split('');

let total = spilittedString.length;

//let spaces : number[] = [];


/* Method 1
var spaces = spilittedString.map((element, index)=> {
    if(element === ' ')
        return index;
    
    else
        return -1})
    .filter((value) => {

            if(value !== -1)
            {
                return value;
            }
    });


    */


// Method 2
    let spaces :number[] = [];
    spilittedString.forEach(
        (element, index)=> {
            if(element === ' ')
            {
                spaces.push(index);
            }
        });
console.log("spaces at: ", spaces);


//var finalString = '';
for(let i=0, j=total-1; i<j && j>i; i++, j--)
{
        let temp = '';
        temp = spilittedString[i];
        spilittedString[i] = spilittedString[j];
        spilittedString[j] = temp;
}


console.log("Simple Reversal: ", spilittedString);

var convertedStr : string[] = spilittedString.join('').replace(/ /g, '').split('');

console.log("After removing spaces: ", convertedStr);

for(let value of spaces)
{

    convertedStr = [...convertedStr.slice(0, value), ' ', ...convertedStr.slice(value)];

}


console.log("Given string       : ", given)
console.log("SpaceInsertedString: ", convertedStr.join(''));
