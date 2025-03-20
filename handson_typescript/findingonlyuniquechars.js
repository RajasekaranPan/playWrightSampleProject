
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