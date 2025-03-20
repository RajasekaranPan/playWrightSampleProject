var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var given = "This is my programming skills";
var spilittedString = given.split('');
var total = spilittedString.length;
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
var spaces = [];
spilittedString.forEach(function (element, index) {
    if (element === ' ') {
        spaces.push(index);
    }
});
console.log("spaces at: ", spaces);
//var finalString = '';
for (var i = 0, j = total - 1; i < j && j > i; i++, j--) {
    var temp = '';
    temp = spilittedString[i];
    spilittedString[i] = spilittedString[j];
    spilittedString[j] = temp;
}
console.log("Simple Reversal: ", spilittedString);
var convertedStr = spilittedString.join('').replace(/ /g, '').split('');
console.log("After removing spaces: ", convertedStr);
for (var _i = 0, spaces_1 = spaces; _i < spaces_1.length; _i++) {
    var value = spaces_1[_i];
    convertedStr = __spreadArray(__spreadArray(__spreadArray([], convertedStr.slice(0, value), true), [' '], false), convertedStr.slice(value), true);
}
console.log("Given string       : ", given);
console.log("SpaceInsertedString: ", convertedStr.join(''));
