


//funtion returnUniqueChars(str: string)
//{
var finalCharcters : string = '';


  const strArray : string[] = "amiyaranjan".split(''); //amiyrnj
// _.uniq(strArray)

for(let i=0; i< strArray.length; i++)
{

 
  const currentChar = strArray[i];
 
    var unique: boolean = false;

 const indexYouWantToRemove = strArray.indexOf(currentChar);
 
 console.log("currentChar: " , currentChar);

 
 console.log("indexYouWantToRemove: " , indexYouWantToRemove);
 
 
 var restOfTheString: string[] = [];
 
 if (indexYouWantToRemove > -1) {
   restOfTheString = strArray.filter( (_, index) => index !== indexYouWantToRemove)
}



 console.log("restOfTheString: " , restOfTheString);

 
if(!restOfTheString.indexOf(currentChar))
{
  unique = true;
}

 if(unique)
 {
    finalCharcters += currentChar;
 }
 else 
 {
    if(finalCharcters.split('').indexOf(currentChar)<0)
        finalCharcters += currentChar;
 }
 
 console.log("finalCharcters: ", finalCharcters);
 
 
}


console.log(finalCharcters);


console.log("--------------- Approach 2 -------------- ");

console.log(strArray);
//var uniqueValues = [...new Set(strArray)];

//console.log(uniqueValues);

