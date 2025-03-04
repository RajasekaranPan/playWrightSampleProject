var str = "hi raja! this is your course"; // iaaiiououe
/*

//1
var reveresedStr = '';
for(let i=str.length -1; i>=0 ;i--)
{
    reveresedStr += str[i];
}

console.log("Simple Reversal: " + reveresedStr);



//2
var splitted: string[] = str.split(' ');

var res: string = splitted.reverse().join(' ');

console.log("Word by Word Reversal: " + res);

//3
var splitted: string[] = str.split(' ');

var convertedString: string[] = [];

for(let i = 0; i< splitted.length; i++)
{

    convertedString.push(splitted[i][0].toUpperCase() + splitted[i].slice(1));
}

console.log(convertedString.join(' '));

*/
// 4
// number of vowels from a given string 
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log("Total number of characters" + str.length);
var numberOfVowels = 0;
//console.log(str.split(' ').includes('hi'));
for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str.split('')[i]) >= 0) {
        numberOfVowels++;
    }
}
console.log("numberOfVowels: " + numberOfVowels);
