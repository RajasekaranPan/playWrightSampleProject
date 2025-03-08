var date = new Date();
var formatter = new Intl.DateTimeFormat('en-CA');
var onlyDate = formatter.format(date); // "YYYY-MM-DD"
console.log(onlyDate);
