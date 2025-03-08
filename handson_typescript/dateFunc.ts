const date = new Date();
const formatter = new Intl.DateTimeFormat('en-CA');
const onlyDate = formatter.format(date); // "YYYY-MM-DD"
console.log(onlyDate);
