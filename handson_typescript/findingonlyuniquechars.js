var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//funtion returnUniqueChars(str: string)
//{
var finalCharcters = '';
var strArray = "amiyaranjan".split(''); //amiyrnj
var _loop_1 = function (i) {
    var currentChar = strArray[i];
    unique = false;
    var indexYouWantToRemove = strArray.indexOf(currentChar);
    console.log("currentChar: ", currentChar);
    console.log("indexYouWantToRemove: ", indexYouWantToRemove);
    restOfTheString = [];
    if (indexYouWantToRemove > -1) {
        restOfTheString = strArray.filter(function (_, index) { return index !== indexYouWantToRemove; });
    }
    console.log("restOfTheString: ", restOfTheString);
    if (!restOfTheString.indexOf(currentChar)) {
        unique = true;
    }
    if (unique) {
        finalCharcters += currentChar;
    }
    else {
        if (finalCharcters.split('').indexOf(currentChar) < 0)
            finalCharcters += currentChar;
    }
    console.log("finalCharcters: ", finalCharcters);
};
var unique, restOfTheString;
// _.uniq(strArray)
for (var i = 0; i < strArray.length; i++) {
    _loop_1(i);
}
console.log(finalCharcters);
console.log("--------------- Approach 2 -------------- ");
console.log(strArray);
var uniqueValues = __spreadArray([], new Set(strArray), true);
console.log(uniqueValues);
